import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
  useValue: {App: 'TaskManager', Ver: '1.0'}
})
export class ConstantsService {

  constructor() {
  }
}
