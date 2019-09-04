import {Component, ViewChild, ViewRef} from '@angular/core';
import {AuthService} from './modules/auth/services/auth.service';
import {JsonPlaceholderService} from './services/json-placeholder.service';
import {ConfigService} from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('rightContent', {static: false}) rightContent: ViewRef;

  constructor(private auth: AuthService,
              private jsonP: JsonPlaceholderService,
              private config: ConfigService
  ) {
    this.auth.checkSession();
    this.jsonP.getPhotos().subscribe((x) => {
      console.log(x);
    });
    this.jsonP.getPhotosPromise().then((x) => {
      console.log(x);
    });
    this.config.getSettings().subscribe((con) => {
        console.log(con);
    });
  }
}
