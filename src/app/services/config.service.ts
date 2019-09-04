import {Injectable} from '@angular/core';
import {retry, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

import {StorageFields, StorageService} from './storage.service';
import defaultConfig from '../../assets/app-config.json';

interface Config {
  sitename: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private storage: StorageService) {
  }

  getSettings(): Observable<Config> {
    return this.storage.getItem<Config>(StorageFields.CONFIG)
      .pipe(
        retry(2),
        switchMap((config) => {
          if (config === null) {
            this.storage.setItem(StorageFields.CONFIG, defaultConfig);
            return of(defaultConfig);
          } else {
            return of(config);
          }
        })
      );
  }
}
