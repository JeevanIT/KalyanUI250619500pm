import { Component } from '@angular/core';
import { ApidataComponent } from '../apidata/apidata.component';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    ApidataComponent
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {

}
