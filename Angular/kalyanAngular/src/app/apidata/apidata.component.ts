import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-apidata',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './apidata.component.html',
  styleUrl: './apidata.component.css'
})
export class ApidataComponent {

  /* 
  Data Binding:
    1. one-way data binding
    (data flow from typescript file to html)
      - String Interpolation
      - Attribute Binding
      - Class Binding
      - Event Binding

    2. two-way data binding
    (data flow from typescript file to html and html to typescript file)
  */

  myname: string = "John Doe";
  mylocation: string = "New York";
  myage: number = 30;

  path: string = "https://images.pexels.com/photos/31636923/pexels-photo-31636923.jpeg";

  myhobbies: string[] = ['Reading', 'Traveling', 'Music'];


  styleclass: string = "styleclass";

}
