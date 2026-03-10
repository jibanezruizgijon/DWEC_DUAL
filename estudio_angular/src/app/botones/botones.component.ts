import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  standalone: false,
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {

  text_color:string = '';

  button_disabled:boolean = false;

}
