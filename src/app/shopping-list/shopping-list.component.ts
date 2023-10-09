import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingedient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[];

  constructor() {
    this.ingredients = [
      new Ingredient('Onions', 3330.04),
      new Ingredient('Tomatoes', 3330.04),
    ];
  }
}
