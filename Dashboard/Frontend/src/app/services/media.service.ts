// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// export interface MediaItem {
//   id: number;
//   name: string;
//   file_name: string;
//   mime_type: string;
//   size: number;
//   collection_name: string;
//   original_url: string;
//   created_at: string;
// }

// @Injectable({ providedIn: 'root' })
// export class MediaService {
//   private baseUrl = '/api/media';

//   constructor(private http: HttpClient) {}

//   getMedia(model: string, id: number): Observable<MediaItem[]> {
//     return this.http.get<MediaItem[]>(`${this.baseUrl}/${model}/${id}`);
//   }

//   uploadMedia(
//     model: string,
//     id: number,
//     file: File,
//     collectionName: string = 'default'
//   ): Observable<MediaItem> {
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('collection_name', collectionName);

//     return this.http.post<MediaItem>(`${this.baseUrl}/${model}/${id}`, formData);
//   }

//   deleteMedia(mediaId: number): Observable<void> {
//     return this.http.delete<void>(`${this.baseUrl}/item/${mediaId}`);
//   }
// }

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaItem } from '.././shared/Model/MediaItem';
import { CommonService } from '../services/common-service/common.service';

@Injectable({ providedIn: 'root' })
export class MediaService {
  private baseUrl = 'media';

  constructor(private commonService: CommonService) {}

  getMedia(model: string, id: number): Observable<MediaItem[]> {
    return this.commonService.get<MediaItem[]>(
      `${this.baseUrl}/${model}/${id}`,
      false
    );
  }

  uploadMedia(
    model: string,
    id: number,
    file: File,
    collectionName: string = 'default'
  ): Observable<MediaItem> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('collection_name', collectionName);

    return this.commonService.post<MediaItem>(
      `${this.baseUrl}/${model}/${id}`,
      formData,
      false,
      undefined,
      'json'
    );
  }

  deleteMedia(mediaId: number): Observable<void> {
    return this.commonService.delete<void>(
      `${this.baseUrl}/item/${mediaId}`,
      false
    );
  }
}
