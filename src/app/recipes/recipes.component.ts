import { Component, Input } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  recipe: Recipe;

  constructor() {
    this.recipe = null;
  }

  onselectedRecipe(recipe: Recipe) {
    this.recipe = recipe;
    // console.log('recipe ' + this.recipe);
  }
}
