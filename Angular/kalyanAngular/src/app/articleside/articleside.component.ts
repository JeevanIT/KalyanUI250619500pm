import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-articleside',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articleside.component.html',
  styleUrl: './articleside.component.css'
})
export class ArticlesideComponent {
  mysidelist: string[] = [
    "Article 1", 
    "Article 2", 
    "Article 3",
    "Article 4",
    "Article 5"

  ];
}
