import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService implements OnInit {
ingredientsChanged = new EventEmitter<Ingredient[]>();
  //ingredientAdded = new EventEmitter<Ingredient>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Coriander', 15),
    new Ingredient('Curry Leaves', 15)
  ];
  constructor() { }
  ngOnInit(): void {

  }
  public addIngredient(ing: Ingredient): void {
    this.ingredients.push(ing);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  public addIngredients(ings: Ingredient[]): void {
    this.ingredients.push(...ings);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  public getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

}



