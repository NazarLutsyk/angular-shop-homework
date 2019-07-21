import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
  useValue: window.localStorage
})
export class LocalStorageService {
}
