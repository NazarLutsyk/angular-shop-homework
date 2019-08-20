import {Component, Input} from '@angular/core';
import {AlertType} from '../../models/alert-type';

@Component({
  selector: 'app-form-info',
  templateUrl: './form-info.component.html',
  styleUrls: ['./form-info.component.css']
})
export class FormInfoComponent {

  @Input() message: string;
  @Input() type: AlertType = 'danger';

}
