import { Deserializable } from '../interfaces/deserializable';

export class Employee implements Deserializable {
  id?: number;
  first_name: string = '';
  last_name?: string;
  email?: string = '';
  phone?: string;
  designation?: string;
  department?: string;
  date_of_birth?: string;
  joining_date?: string;
  salary?: number;
  address?: string;
  is_active: boolean = false;
  created_at?: string;
  updated_at?: string;

  deserialize(input: any): this {
    if (input) {
      Object.assign(this, input);
    }
    return this;
  }

  toOdata(): Object {
    const { created_at, updated_at, ...odata } = this;
    return odata;
  }
}
