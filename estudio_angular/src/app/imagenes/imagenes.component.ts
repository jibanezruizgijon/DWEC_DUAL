import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagenes',
  standalone: false,
  templateUrl: './imagenes.component.html',
  styleUrl: './imagenes.component.css'
})
export class ImagenesComponent implements OnInit {

  constructor () {}
   
  ngOnInit(): void {
    
  }

  img:string = "https://images.pexels.com/photos/31359071/pexels-photo-31359071.jpeg";
  img2:string = "https://images.pexels.com/photos/35537012/pexels-photo-35537012.jpeg";

}
