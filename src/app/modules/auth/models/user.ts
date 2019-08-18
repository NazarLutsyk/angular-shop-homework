import {Roles} from './roles';

export interface User {
  id?: number;
  login?: string;
  password?: string;
  role?: Roles;
}
