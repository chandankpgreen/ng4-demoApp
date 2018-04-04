import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  showRecipeDetail(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  recipes: Recipe[] = [
    new Recipe('Chicken Tandoori', 'Recipe for Chicken Tandoori', 'https://mayakitchenette.com/wp-content/uploads/2014/06/tandoori-chicken-recipe.jpg'),
    new Recipe('Paneer Tikka', 'Recipe for Paneer tikka', 'http://www.awesomecuisine.com/content_images/1/tandoori_paneer_tikka.jpg'),
  ];

}
