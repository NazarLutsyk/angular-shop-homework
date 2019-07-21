import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('appTitle') title: ElementRef;


  constructor() {
  }

  ngOnInit(): void {
    this.title.nativeElement.innerText = 'SHOP';
  }
}
