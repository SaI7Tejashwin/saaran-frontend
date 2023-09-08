import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor(private http: HttpClient) {}

  uploadData(data: string): Observable<any> {
    const url = 'http://localhost:8080/api/upload';
    return this.http.post(url, { content: data });
  }
}
