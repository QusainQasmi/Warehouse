import { Component } from '@angular/core';

interface UploadFile {
  file: File;
  name: string;
}

@Component({
  selector: 'app-cs-fileuploader',
  standalone: false,
  templateUrl: './cs-fileuploader.component.html',
  styleUrl: './cs-fileuploader.component.scss'
})
export class CsFileuploaderComponent {

files: UploadFile[] = [];
  isDragging = false;

  // Drag Events
  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;

    if (event.dataTransfer?.files) {
      this.addFiles(event.dataTransfer.files);
    }

  }

  // File Select
  onFileSelected(event: any) {
    const files = event.target.files;
    this.addFiles(files);
  }

  addFiles(fileList: FileList) {
    for (let i = 0; i < fileList.length; i++) {
      this.files.push({
        file: fileList[i],
        name: fileList[i].name,
      });
    }
  }

  removeFile(index: number) {
    this.files.splice(index, 1);
  }

}
