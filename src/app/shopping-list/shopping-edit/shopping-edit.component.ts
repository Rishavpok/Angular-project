import { Component, OnInit , EventEmitter , Output, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListServie } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
@ViewChild ('f') slService:NgForm;
 subcription: Subscription;
 editMode = false;
 editedItemIndex: number
 editedItem: Ingredient

  constructor(private shopService: ShoppingListServie) { }

  ngOnInit(): void {
    console.log('shop-edit')
    this.subcription = this.shopService.startedEditing
    .subscribe(
      (index: number) => {
        this.editedItemIndex = index;
         this.editMode = true;
         this.editedItem = this.shopService.getIngredients(index);
         this.slService.setValue({
           name:this.editedItem.name,
           amount:this.editedItem.amount
         })
      }
    );
  }
  onAddItem(form: NgForm){
    const value = form.value
   const newIngredient = new Ingredient(value.name , value.amount)
   if(this.editMode){
     this.shopService.updateIngredient(this.editedItemIndex, newIngredient);
   }
   else{
    this.shopService.addIngredient(newIngredient);
   }
   this.editMode = false;
   form.reset();
   
  }

  onClear(){
    this.slService.reset();
    this.editMode = false;
  }
  onDelete(){
    this.shopService.deleteIngredient(this.editedItemIndex);
    this.onClear();
   

  }

  ngOnDestroy(){
    this.subcription.unsubscribe();
  }

}
