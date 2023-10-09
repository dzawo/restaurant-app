import { Component } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[];

  constructor() {
    this.recipes = [
      new Recipe(
        'Gulash',
        'For cooking gulash',
        'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ),
      new Recipe(
        'Gulash',
        'For cooking gulash',
        'https://media.istockphoto.com/id/1060535922/photo/american-chop-suey-american-goulash-with-elbow-pasta-beef-and-tomatoes-close-up-horizontal.jpg?s=612x612&w=0&k=20&c=y87kR4apeU5a9BOtmnDneZv_3okFPlwTRUtpkgI1Yas='
      ),
    ];
  }
}
