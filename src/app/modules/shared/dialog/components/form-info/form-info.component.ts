import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-form-info',
  templateUrl: './form-info.component.html',
  styleUrls: ['./form-info.component.css']
})
export class FormInfoComponent {

  @Input() message: string;
  @Input() type: 'danger' = 'danger';

}
