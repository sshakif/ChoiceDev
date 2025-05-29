
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

// export interface MediaItem {
//   id: number;
//   name: string;
//   file_name: string;
//   mime_type: string;
//   size: number;
//   collection_name: string;
//   original_url: string;
//   created_at: string;
//   selected?: boolean;
//   local_url?: string; // For client-side previews only
// }
// src/app/shared/interfaces/media-item.ts (Create this file if it doesn't exist)
// export interface MediaItem {
//   id?: number;
//   name: string;
//   mime_type: string;
//   size: number;
//   original_url?: string; // URL from the server after upload
//   full_url?: string; // Often APIs provide a "full_url" for direct use
//   url?: string; // Some APIs might just use 'url'
//   selected?: boolean;
//   created_at?: string;
//   local_url?: string; // For client-side previews only (used in AttachmentsComponent)
// }

// src/app/shared/interfaces/media-item.interface.ts (or similar path)

import { SafeUrl } from '@angular/platform-browser'; 

export interface MediaItem {
  id?: number;
  name: string;
  file_name?: string;
  mime_type: string;
  size: number; 
  url?: string; 
  full_url?: string; 
  original_url?: string; 
  local_url?: SafeUrl;
  selected?: boolean;
  created_at?: string;
}
