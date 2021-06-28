import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListServie } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy  {
ingredients :Ingredient[]  
private igSubChange : Subscription;
private index: number
  constructor(private shopServie: ShoppingListServie ) { }

  ngOnInit(): void {
    this.ingredients = this.shopServie.getIngredient();
  this.igSubChange =  this.shopServie.ingredientChanged.subscribe(
      (ingredient: Ingredient[]) => {
        this.ingredients = ingredient;
      }
    )
  }
   
  onEditItem(index: number){
      this.shopServie.startedEditing.next(index);
      console.log(index)
  }

  ngOnDestroy(){
   this.igSubChange.unsubscribe();
  }
}
