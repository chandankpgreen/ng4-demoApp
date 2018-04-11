import { Injectable, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';

@Injectable()
export class RecipeService {
   recipeSelected = new EventEmitter<Recipe>();

  constructor() { }
  private recipes: Recipe[] = [
    new Recipe('Chicken Tandoori', 'Recipe for Chicken Tandoori', 'https://mayakitchenette.com/wp-content/uploads/2014/06/tandoori-chicken-recipe.jpg'),
    new Recipe('Paneer Tikka', 'Recipe for Paneer tikka', 'http://www.awesomecuisine.com/content_images/1/tandoori_paneer_tikka.jpg'),
  ];
 getRecipes(){
   return this.recipes.slice();
 }

}
