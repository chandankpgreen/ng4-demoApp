import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;
  constructor(private shoppingListService: ShoppingListService) { 

  }

  ngOnInit() {
  }
  onAddItem(){
    var amount = this.amountInputRef.nativeElement.value;
    var name = this.nameInputRef.nativeElement.value;
  //  console.log(amount);
   // console.log(name);
    var ingredient = new Ingredient(name, amount);
    this.shoppingListService.addIngredient(ingredient);
  }

}
