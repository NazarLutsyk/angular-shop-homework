import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-try-pipes',
  templateUrl: './try-pipes.component.html',
  styleUrls: ['./try-pipes.component.css']
})
export class TryPipesComponent {

  // using this instead of changing service, because that might break a lot of logic
  data$ = new Observable(subscriber => subscriber.next('Hello!'));

}
