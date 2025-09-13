// import { Deserializable } from '@app/shared/interfaces/deserializable';

// export class ServicePage implements Deserializable {
//   id?: number;
//   title?: string;
//   short_description?: string;
//   long_description?: string;
//   // image?: string;
//   is_active: boolean = true;
//   created_at?: string;
//   updated_at?: string;

//   deserialize(input: any): this {
//     if (input) {
//       Object.assign(this, input);
//     }
//     return this;
//   }

//   toOdata(): Object {
//     return {
//       ...this,
//       created_at: undefined,
//       updated_at: undefined,
//     };
//   }
// }

import { Deserializable } from '@app/shared/interfaces/deserializable'; 
import { MediaItem } from '@app/shared/Model/MediaItem'; 

export class ServicePage implements Deserializable {
  id?: number;
  title?: string;
  short_description?: string;
  long_description?: string;
  is_active: boolean = true;
  created_at?: string;
  updated_at?: string;
  media?: MediaItem[]; 
  deserialize(input: any): this {
    if (input) {
      Object.assign(this, input);

      if (input.media && Array.isArray(input.media)) {
        this.media = input.media.map((item: any) => ({
          id: item.id,
          name: item.name,
          mime_type: item.mime_type,
          size: item.size,

          original_url: item.original_url || item.url || item.full_url,
          full_url: item.full_url || item.original_url || item.url, 
          url: item.url || item.original_url || item.full_url,
          created_at: item.created_at,
          
        }));
      } else {
        this.media = []; 
      }
    }
    return this;
  }

  toOdata(): Object {
   
    return {
      ...this,
      created_at: undefined, 
      updated_at: undefined, 
      media: undefined,
    };
  }
}