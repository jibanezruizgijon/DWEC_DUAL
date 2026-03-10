import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  standalone: false,
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent implements OnInit{
  constructor() { }
  ngOnInit(): void { }

  dia?:string;

}
