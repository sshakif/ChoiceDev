// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({ providedIn: 'root' })
// export class MediaService {
//   private apiUrl = 'http://localhost:8000/api';

//   constructor(private http: HttpClient) {}

// getMedia(model: string, id: string | number): Observable<any> {
//   console.log(`Fetching media for model: ${model}, id: ${id}`);
//   return this.http.get(`${this.apiUrl}/media/${model}/${id}`);
// }

//   uploadFile(file: File, model: string, id: string | number): Observable<any> {
//     const formData = new FormData();
//   formData.append('model_type', 'Post');
//   formData.append('model_id', '1');
//   formData.append('file', file);

//   this.http.post('http://127.0.0.1:8000/api/media/upload', formData)
//     .subscribe(response => {
//       console.log('Upload success:', response);
//     });

//   return this.http.post(`${this.apiUrl}/media/upload`, formData);
//   }
// }

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MediaService {
  constructor() {}

  prepareFormData(file: File, model: string, id: string | number): FormData {
    const formData = new FormData();
    formData.append('model_type', model);
    formData.append('model_id', id.toString());
    formData.append('file', file);
    return formData;
  }
  
}
