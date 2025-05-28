
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

export interface MediaItem {
  id: number;
  name: string;
  file_name: string;
  mime_type: string;
  size: number;
  collection_name: string;
  original_url: string;
  created_at: string;
  selected?: boolean;
}
