import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is sample a test', 
    'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2022_31/1895935/220804-recipe2x1-sj-119.jpg'),
    new Recipe('A Test Recipe', 'This is sample a test', 
    'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2022_31/1895935/220804-recipe2x1-sj-119.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
