import { Component } from '@angular/core';
import { ArticlesideComponent } from '../articleside/articleside.component';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-mainbody',
  standalone: true,
  imports: [
    ArticlesideComponent,
    ArticleComponent
  ],
  templateUrl: './mainbody.component.html',
  styleUrl: './mainbody.component.css'
})
export class MainbodyComponent {

}
