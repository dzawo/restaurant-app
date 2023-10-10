import { Component } from '@angular/core';
import { Recipe } from './recipes/models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedFeature: string;

  constructor() {
    this.selectedFeature = 'recipe';
  }

  title = 'restaurant-app';
  onSelected(selected: string) {
    this.selectedFeature = selected;
  }
}
