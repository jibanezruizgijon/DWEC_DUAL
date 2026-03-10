import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-contador',
  standalone: false,
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})

export class ContadorComponent implements OnInit{

  constructor() { }
  
  ngOnInit(): void {
  }

  // nombre:string = "Jonathan Ibáñez";

  // persona: Persona = {
  //   nombre : "Jonathan Ibáñez",
  //   edad : 32,
  //   profesion : "Desarrollador Web"
  // }
  numero: number = 1;

restar(){
  this.numero--;
}

sumar(){
  this.numero++
}
}
