import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UploadService } from './upload.service';
import { IconOverviewExample } from './icon/icon.componenet';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  standalone:true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule,IconOverviewExample]
})
export class UploadComponent {
  selectedFile: File | null = null; // Set the initial value to null
  
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  clearSelectedFile(): void {
    this.selectedFile = null;
  }

  // constructor(private uploadService: UploadService) {}

  // sendDefaultData(): void {
  //   const defaultValue = 'Hello';
  //   this.uploadService.uploadData(defaultValue).subscribe(
  //     (response: any) => {
  //       console.log('Response from backend:', response);
  //     },
  //     (error: any) => {
  //       console.error('Error:', error);
  //     }
  //   );
  // }
//above code causes routing issue.
// tesseract js?
  
}

