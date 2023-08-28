import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { deleteIcon } from './deleteicon/icon.componenet';
import { uploadIcon } from './uploadicon/icon.componenet';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule,deleteIcon,uploadIcon]
})
export class UploadComponent {
  selectedFile: File | null = null;

  //constructor(private uploadService: UploadService) {}

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
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