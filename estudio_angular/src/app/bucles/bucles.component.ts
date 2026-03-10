import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-bucles',
  standalone: false,
  templateUrl: './bucles.component.html',
  styleUrl: './bucles.component.css'
})
export class BuclesComponent implements OnInit{
  personas:Persona[] = [
    {nombre: "Luis", edad: 23, profesion: "DIW"},
    {nombre: "Rosa", edad: 46, profesion: "Despliegue"},
    {nombre: "Ruben", edad: 34, profesion: "SpringBoot"},
    {nombre: "Lucas", edad: 25, profesion: "Policia"}
  ]


  constructor () { }

  ngOnInit(): void {
    
  }

}
