import { EventEmitter, Inject, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListServie } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model"
@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
        new Recipe('Pizza', 
        'this is simply a test', 
        'https://www.brit.co/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMTIxMDkxMy9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY0NTk2Njg4NX0.IRD_l12EqBNtLL_aVSvWbVJ6rx-fbtLbkpqj434TIkY/image.jpg?width=600&quality=85',
        [
            new Ingredient('Meat',1),
            new Ingredient('Buns', 5)
        ]),
        new Recipe('Burger', 
        'this is simply a test', 
        'https://www.brit.co/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMTIxMDkxMy9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY0NTk2Njg4NX0.IRD_l12EqBNtLL_aVSvWbVJ6rx-fbtLbkpqj434TIkY/image.jpg?width=600&quality=85',
        [
            new Ingredient('Meat',1),
            new Ingredient('fries', 5)
        ])
      ] 

      constructor(private shopServie:ShoppingListServie ){}

    getRecipe(){
        return this.recipes.slice();
    }  
    getRecipeById(index: number) {
       return this.recipes[index];
    }
    onIngredientAddToList(ingredient : Ingredient[]){
         this.shopServie.addIngredients(ingredient);
    }
}