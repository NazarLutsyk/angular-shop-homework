import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  private config: any = {};

  setSettings(props: any) {
    if (typeof props === 'object' && Object.keys(props).length > 0) {
      this.config = Object.assign({}, this.config, props);
    }
  }

  getSettings() {
    return this.config;
  }
}
