import {
  Component,
  Input,
  ViewChild,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  OnDestroy,
  TemplateRef,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { lastValueFrom, from, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CsDialogComponent } from '../cs-dialog/cs-dialog.component';
import { SetupService } from '../../services/setup.service';
import { DialogService } from '../../services/dialog.service';

/**
 * CsSetupComponent
 *
 * Generic setup grid that accepts:
 *  - @Input() columns: CsGridColumn[]  (from the feature page)
 *  - @Input() controllerName: string  (e.g. 'Warehouse', 'Product')
 *
 * It expects SetupService to expose CRUD endpoints via getData(action, payload?)
 * and DialogService to open dialogs (confirmations / forms).
 *
 * Replace or adapt SetupService method names if your API wrapper differs.
 */

@Component({
  selector: 'cs-setup',
  standalone: false,
  templateUrl: './cs-setup.component.html',
  styleUrls: ['./cs-setup.component.scss'],
})
export class CsSetupComponent implements OnChanges, AfterViewInit, OnDestroy {
  // -------------------------
  // Inputs (provided by parent)
  // -------------------------
  @Input() columns: CsGridColumn[] = [];
  @Input() title?: string;
  @Input() controllerName!: string; // required: controller or endpoint key

  // -------------------------
  // Table & UI State
  // -------------------------
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>([]);
  isLoading = false;
  isSaving = false; // for add/edit
  filterValue = '';

  // -------------------------
  // Material Paginator & Sort
  // -------------------------
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // -------------------------
  // Services & helpers (injected)
  // -------------------------
  constructor(
    private _setupService: SetupService,
    private _dialogService: DialogService,
    private _snack: MatSnackBar
  ) {}

  // -------------------------
  // Internal utils
  // -------------------------
  private destroy$ = new Subject<void>();
  private viewInitialized = false;

  // -------------------------
  // Lifecycle - Inputs changed
  // -------------------------
  ngOnChanges(changes: SimpleChanges): void {
    // When controllerName changes, tell service (if you have that method)
    if (changes['controllerName'] && this.controllerName) {
      // optional depending on your service
      try {
        this._setupService.setControllerName?.(this.controllerName);
      } catch (e) {
        // ignore if not present
      }
    }

    // Build displayedColumns: all keys from columns + actions at end
    if (changes['columns']) {
      this.displayedColumns = [...this.columns.map((c) => c.key), 'actions'];
    }

    // If view already initialized, reload data for new inputs
    if (this.viewInitialized) {
      this.loadData();
    }
  }

  // -------------------------
  // Lifecycle - After view init
  // -------------------------
  ngAfterViewInit(): void {
    // assign paginator & sort once they are ready
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.viewInitialized = true;

    // initial load
    this.loadData();
  }

  // -------------------------
  // READ (Load Data)
  // -------------------------
  /**
   * loadData
   * Step 1: set loading state
   * Step 2: call SetupService.getData('GetAllData')
   *    - supports both Promise or Observable returns
   * Step 3: set datasource.data and reset paginator
   * Step 4: handle errors & fallback to dummy data
   */
  async loadData(): Promise<void> {
    this.isLoading = true;

    try {
      // Convert Promise|Observable to Promise reliably
      // (lastValueFrom will work for Observable; from() wraps Promise -> Observable)
      const result: any = await lastValueFrom(
        from(this._setupService.getData('GetAllData'))
      );

      if (result?.IsSuccess) {
        this.dataSource.data = Array.isArray(result.Data) ? result.Data : [];
        this._snack.open('Loaded data', 'OK', { duration: 1200 });
      } else {
        // API responded but not success (use fallback)
        console.warn('GetAllData returned not successful:', result?.Message);
        this.dataSource.data = this.getDummyData();
        this._snack.open('Using fallback data (server returned error)', 'OK', {
          duration: 2000,
        });
      }
    } catch (err) {
      console.error('Error loading setup data:', err);
      this.dataSource.data = this.getDummyData();
      this._snack.open('Failed to load data — using fallback', 'OK', {
        duration: 2200,
      });
    } finally {
      this.isLoading = false;
      // reset paginator to first page
      try {
        if (this.paginator) this.paginator.firstPage();
      } catch {}
    }
  }

  // -------------------------
  // CREATE / UPDATE - Open Form Dialog
  // -------------------------
  /**
   * openForm
   * Step 1: open a form dialog via DialogService (parent provides form component or DialogService presents a form)
   * Step 2: after dialog closes, call create or update endpoints accordingly
   *
   * Note: DialogService API assumed:
   *  - open(component, { data, width, ... }) returns MatDialogRef
   *  - confirm(...) used below for delete
   *
   * If your DialogService API differs adjust accordingly.
   */
  async openFormDialog(row?: any): Promise<void> {
    // open dialog (re-usable form can be provided by parent via config or you can have a generic form component)
    const dialogRef = this._dialogService.open(CsDialogComponent, {
      width: '40vw',
      data: row ? { mode: 'edit', payload: row } : { mode: 'create' },
      // you can pass column configuration so the dialog can build a dynamic form
      extra: { columns: this.columns },
    });

    // Wait for dialog to close and get returned form value
    const formResult = await lastValueFrom(from(dialogRef.afterClosed()));

    if (!formResult) {
      // user cancelled
      return;
    }

    // If row existed -> update, else create
    if (row && row.id) {
      await this.updateItem(row.id, formResult);
    } else {
      await this.createItem(formResult);
    }
  }

  // -------------------------
  // CREATE (POST)
  // -------------------------
  /**
   * createItem(payload)
   * Step 1: show saving state
   * Step 2: call SetupService.getData('Create', payload) or SetupService.create(payload)
   * Step 3: on success, push to dataSource.data and show toast
   * Step 4: on error, show toast
   */
  async createItem(payload: any): Promise<void> {
    this.isSaving = true;

    try {
      const res: any = await lastValueFrom(
        from(this._setupService.post('Create', payload))
      );
      if (res?.IsSuccess) {
        // Insert new item into local datasource
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

  // -------------------------
  // UPDATE (PUT)
  // -------------------------
  /**
   * updateItem(id, payload)
   * Step 1: optimistic update (keep copy to rollback)
   * Step 2: call SetupService.getData('Update', payloadWithId)
   * Step 3: on success, replace the item in dataSource.data
   * Step 4: on error, rollback and notify
   */
  async updateItem(id: any, payload: any): Promise<void> {
    this.isSaving = true;

    // Keep current state for rollback
    const current = [...this.dataSource.data];
    const idx = current.findIndex((r) => r.id === id);
    if (idx === -1) {
      this._snack.open('Record not found locally', 'OK', { duration: 1400 });
      this.isSaving = false;
      return;
    }

    // Optimistic local update for snappy UX
    const optimistic = { ...current[idx], ...payload };
    current[idx] = optimistic;
    this.dataSource.data = current;

    try {
      const res: any = await lastValueFrom(
        from(this._setupService.put('Update', { id, ...payload }))
      );
      if (res?.IsSuccess) {
        this._snack.open('Updated successfully', 'OK', { duration: 1400 });
        // If API returned canonical object, replace
        if (res.Data) {
          this.dataSource.data = this.dataSource.data.map((r) =>
            r.id === id ? res.Data : r
          );
        }
      } else {
        // rollback
        this.dataSource.data = this.dataSource.data.map((r) =>
          r.id === id ? res?.OldData ?? r : r
        );
        this._snack.open(res?.Message || 'Update failed', 'OK', {
          duration: 2200,
        });
      }
    } catch (err) {
      console.error('Update error', err);
      // rollback to previous snapshot (simple reload)
      await this.loadData();
      this._snack.open('Update failed: server error', 'OK', { duration: 2200 });
    } finally {
      this.isSaving = false;
    }
  }

  // -------------------------
  // DELETE (DELETE)
  // -------------------------
  /**
   * deleteItem(row)
   * Step 1: ask for confirmation (DialogService.confirm)
   * Step 2: optimistic remove from UI
   * Step 3: call SetupService.getData('Delete', { id })
   * Step 4: on error, rollback
   */
  async deleteItem(row: any): Promise<void> {
    if (!row?.id) {
      this._snack.open('Invalid record', 'OK', { duration: 1400 });
      return;
    }

    // Confirm
    // Confirm via dialog service if available, otherwise fallback to window.confirm.
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

    // Keep snapshot for rollback
    const prev = [...this.dataSource.data];
    this.dataSource.data = prev.filter((r) => r.id !== row.id);

    try {
      const res: any = await lastValueFrom(
        from(this._setupService.delete('Delete', row.id))
      );
      if (res?.IsSuccess) {
        this._snack.open('Deleted', 'OK', { duration: 1300 });
      } else {
        // rollback
        this.dataSource.data = prev;
        this._snack.open(res?.Message || 'Delete failed', 'OK', {
          duration: 2200,
        });
      }
    } catch (err) {
      console.error('Delete error', err);
      // rollback
      this.dataSource.data = prev;
      this._snack.open('Delete failed: server error', 'OK', { duration: 2200 });
    }
  }

  // -------------------------
  // FILTER (Client-side quick filter)
  // -------------------------
  applyFilter(value: string) {
    this.filterValue = value?.trim().toLowerCase() ?? '';
    this.dataSource.filter = this.filterValue;
  }

  /**
   * Template uses `displayColumnKeys` — expose a getter that returns the
   * currently calculated displayedColumns so templates remain stable.
   */
  get displayColumnKeys() {
    return this.displayedColumns;
  }

  /**
   * Add / Edit helpers used by template
   */
  addItem() {
    // Opens the form dialog in create mode
    this.openFormDialog();
  }

  editItem(row: any) {
    // Open form dialog in edit mode
    this.openFormDialog(row);
  }

  // -------------------------
  // Utility: dummy fallback data (developer-friendly)
  // -------------------------
  private getDummyData() {
    return [
      {
        id: 1,
        name: 'Main Warehouse',
        code: 'WH-001',
        createdAt: new Date(),
        isActive: true,
      },
      {
        id: 2,
        name: 'Secondary Warehouse',
        code: 'WH-002',
        createdAt: new Date(),
        isActive: false,
      },
      {
        id: 3,
        name: 'Overflow Warehouse',
        code: 'WH-003',
        createdAt: new Date(),
        isActive: true,
      },
    ];
  }

  // -------------------------
  // Cleanup
  // -------------------------
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

/**
 * Public interface used by parent features
 */
export interface CsGridColumn {
  key: string; // property name in row objects
  label: string; // header text
  sortable?: boolean; // enable sorting (if you extend the component to support it)
  sticky?: boolean;
  isDate?: boolean;
  // Provide an optional TemplateRef to render the cell. Null/undefined means no template.
  template?: TemplateRef<{ $implicit: any }> | null;
}

/**
 * Minimal placeholders for services to avoid TS errors in this snippet.
 * Remove or replace these when you place the file into your app (actual services exist in your project).
 */
// Using the real SetupService / DialogService from core/services — no ambient placeholders here.
