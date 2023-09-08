import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { deleteIcon } from './deleteicon/icon.componenet';
import { uploadIcon } from './uploadicon/icon.componenet';
import { Observable } from 'rxjs';
import { FileUploadService } from '../services/file-upload.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule,deleteIcon,uploadIcon]
})

/**
 * upload a single file to send to the backend
 */
export class UploadComponent implements OnInit{
  
  selectedFile: File | null = null; // Set the initial value to null
  progress = 0;
  message = '';

  fileInfo?: Observable<any>;

  constructor(private uploadService: FileUploadService) { }

  ngOnInit(): void {
    this.fileInfo = this.uploadService.getFile();
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0]; //Take the first file selected
    if (file) {
      this.selectedFile = file;
    }
  }

  uploadFile(): void {
    this.progress = 0;

    if(this.selectedFile) {
      const file: File | null = this.selectedFile;

    this.uploadService.upload(this.selectedFile).subscribe({
      next: (event: any) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfo = this.uploadService.getFile();
        }
      },
      error: (err: any) => {
        console.log(err);
        this.progress = 0;

        if(err.error && err.error.message) {
          this.message = err.error.message;
        } else {
          this.message = 'Could not upload the file!';
        }
      }
    });
    }
  }

  clearSelectedFile(): void {
    this.selectedFile = null;
  }


}
// handleFileInput(event: any): void {
//   const file = event.target.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       if (e.target && e.target.result) {
//         const fileContent = e.target.result as string;
//         this.uploadService.uploadData(fileContent);
//       }
//     };
//     reader.readAsText(file);
//   }
// }