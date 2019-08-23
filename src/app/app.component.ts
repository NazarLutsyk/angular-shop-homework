import {Component, ViewChild, ViewRef} from '@angular/core';
import {AuthService} from './modules/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('rightContent', {static: false}) rightContent: ViewRef;

  constructor(private auth: AuthService) {
    this.auth.checkSession();
  }
}
