import {
  Component,
  Input,
  ViewChild,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  OnDestroy,
  TemplateRef,
  ChangeDetectorRef,
  OnInit,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { lastValueFrom, from, Subject } from 'rxjs';
import { CsDialogComponent } from '../cs-dialog/cs-dialog.component';
import { SetupService } from '../../services/setup.service';
import { DialogService } from '../../services/dialog.service';
import { MatDialogConfig } from '@angular/material/dialog';
import { FromElement } from '../cs-form/cs-form.component';

@Component({
  selector: 'cs-setup',
  standalone: false,
  templateUrl: './cs-setup.component.html',
  styleUrls: ['./cs-setup.component.scss'],
})
export class CsSetupComponent implements OnChanges, OnDestroy, OnInit {

  @Input() columns: CsGridColumn[] = [];
  @Input() controllerName!: string;
  @Input() title: string = "";
  @Input() width: string = "80vw";
  private _elements: FromElement[] = [];
  duplicateData: any[] = [];
  @Input()
  set elements(value: FromElement[]) {
    this._elements = value;
  }

  get elements(): any[] {
    return this._elements;
  }
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>([]);
  isLoading = false;
  isSaving = false;
  filterValue = '';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _setupService: SetupService,
    private _dialogService: DialogService,
    private _snack: MatSnackBar,
    private _detectChanges: ChangeDetectorRef
  ) { }

  private destroy$ = new Subject<void>();
  private viewInitialized = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['controllerName'] && this.controllerName) {
      try {
        this._setupService.setController?.(this.controllerName);
      } catch (e) {
      }
    }

    if (changes['columns']) {
      this.displayedColumns = [...this.columns.map((c) => c.key), 'actions'];
    }

    if (this.viewInitialized) {
      this.loadData();
    }
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.viewInitialized = true;
    this.loadData();
  }

  async loadData(): Promise<void> {
    this.isLoading = true;
    const result: any = await this._setupService.getAll('GetAllData');
    this.isLoading = false;
    if (result?.IsSuccess) {
      this.dataSource.data = Array.isArray(result.Data) ? result.Data : [];
      this.duplicateData = this.dataSource.data;
    } else {
      this.dataSource.data = [];
      this.duplicateData = [];
      // this._snack.open('Using fallback data (server returned error)', 'OK', {
      //   duration: 2000,
      // });
    }
    // try {

    // } catch (err) {
    //   this._snack.open('Failed to load data — using fallback', 'OK', {
    //     duration: 2200,
    //   });
    // } finally {
    //   this.isLoading = false;
    //   try {
    //     if (this.paginator) this.paginator.firstPage();
    //   } catch {}
    // }
  }

  changeDatasource(event: any) {
    if (event?.length > 0) {
      this.dataSource.data = event;
    } else {
      this.dataSource.data = this.duplicateData;
    }
  }

  async openFormDialog(row?: any): Promise<void> {
    const dialogRef = this._dialogService.open(CsDialogComponent, {
      title: row ? `Edit ${this.title}` : `Add ${this.title}`,
      model: row ? row : {},
      elements: this.elements
    }, undefined, this.width);

    const formResult = await lastValueFrom(from(dialogRef.afterClosed()));

    if (!formResult) {
      return;
    }

    if (row && row.id) {
      await this.updateItem(row.id, formResult);
    } else {
      await this.createItem(formResult);
    }
  }

  async createItem(payload: any): Promise<void> {
    this.isSaving = true;

    try {
      const res: any = await lastValueFrom(
        from(this._setupService.create('Create', payload))
      );
      if (res?.IsSuccess) {
        const newItem = res?.Data ?? payload;
        this.dataSource.data = [newItem, ...this.dataSource.data];
        this._snack.open('Created successfully', 'OK', { duration: 1500 });
      } else {
        this._snack.open(res?.Message || 'Create failed', 'OK', {
          duration: 2000,
        });
      }
    } catch (err) {
      console.error('Create error', err);
      this._snack.open('Create failed: server error', 'OK', { duration: 2200 });
    } finally {
      this.isSaving = false;
    }
  }

  async updateItem(id: any, payload: any): Promise<void> {
    this.isSaving = true;
    const current = [...this.dataSource.data];
    const idx = current.findIndex((r) => r.id === id);
    if (idx === -1) {
      this._snack.open('Record not found locally', 'OK', { duration: 1400 });
      this.isSaving = false;
      return;
    }

    const optimistic = { ...current[idx], ...payload };
    current[idx] = optimistic;
    this.dataSource.data = current;

    try {
      const res: any = await lastValueFrom(
        from(this._setupService.update('Update', { id, ...payload }))
      );
      if (res?.IsSuccess) {
        this._snack.open('Updated successfully', 'OK', { duration: 1400 });
        if (res.Data) {
          this.dataSource.data = this.dataSource.data.map((r) =>
            r.id === id ? res.Data : r
          );
        }
      } else {
        this.dataSource.data = this.dataSource.data.map((r) =>
          r.id === id ? res?.OldData ?? r : r
        );
        this._snack.open(res?.Message || 'Update failed', 'OK', {
          duration: 2200,
        });
      }
    } catch (err) {
      console.error('Update error', err);
      await this.loadData();
      this._snack.open('Update failed: server error', 'OK', { duration: 2200 });
    } finally {
      this.isSaving = false;
    }
  }

  async deleteItem(row: any): Promise<void> {
    if (!row?.id) {
      this._snack.open('Invalid record', 'OK', { duration: 1400 });
      return;
    }

    let confirmedResult = false;
    try {
      if (typeof (this._dialogService as any).confirm === 'function') {
        const confirmed = (this._dialogService as any).confirm({
          title: 'Confirm delete',
          message: `Are you sure you want to delete \"${row?.name ?? row?.id}\"?`,
          confirmText: 'Delete',
          cancelText: 'Cancel',
        });

        confirmedResult = await lastValueFrom(from(Promise.resolve(confirmed)));
      } else {
        confirmedResult = window.confirm(
          `Are you sure you want to delete "${row?.name ?? row?.id}"?`
        );
      }
    } catch (err) {
      confirmedResult = false;
    }

    const prev = [...this.dataSource.data];
    this.dataSource.data = prev.filter((r) => r.id !== row.id);

    try {
      const res: any = await lastValueFrom(
        from(this._setupService.remove('Delete', row.id))
      );
      if (res?.IsSuccess) {
        this._snack.open('Deleted', 'OK', { duration: 1300 });
      } else {
        this.dataSource.data = prev;
        this._snack.open(res?.Message || 'Delete failed', 'OK', {
          duration: 2200,
        });
      }
    } catch (err) {
      console.error('Delete error', err);
      this.dataSource.data = prev;
      this._snack.open('Delete failed: server error', 'OK', { duration: 2200 });
    }
  }

  // applyFilter(value: string) {
  //   this.filterValue = value?.trim().toLowerCase() ?? '';
  //   this.dataSource.filter = this.filterValue;
  // }

  get displayColumnKeys() {
    return this.displayedColumns;
  }

  addItem() {
    this.openFormDialog();
  }

  editItem(row: any) {
    this.openFormDialog(row);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

export interface CsGridColumn {
  key: string;
  label: string;
  sortable?: boolean;
  sticky?: boolean;
  isDate?: boolean;
  isNumber?: boolean;
  template?: TemplateRef<{ $implicit: any }> | null;
}
