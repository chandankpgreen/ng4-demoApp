import { Injectable, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) { }
  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Tandoori',
      'Recipe for Chicken Tandoori',
      'https://mayakitchenette.com/wp-content/uploads/2014/06/tandoori-chicken-recipe.jpg',
      [
        new Ingredient('Chicken Meat balls', 15),
        new Ingredient('Cream', 10)
      ]
    ),
    new Recipe(
      'Paneer Tikka',
      'Recipe for Paneer tikka',
      'http://www.awesomecuisine.com/content_images/1/tandoori_paneer_tikka.jpg',
      [
        new Ingredient('Paneer slices', 18),
        new Ingredient('Capsicum', 5)
      ]
    ),
  ];
  getRecipes() {
    return this.recipes.slice();
  }
  public addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
