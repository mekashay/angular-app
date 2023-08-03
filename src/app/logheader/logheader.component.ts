import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-logheader',
  templateUrl: './logheader.component.html',
  styleUrls: ['./logheader.component.css']
})
export class LogheaderComponent {
  @Input() title: string;
}
