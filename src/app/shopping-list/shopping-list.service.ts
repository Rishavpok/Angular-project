import { Ingredient } from "../shared/ingredient.model";
import { Subject } from 'rxjs';

export class ShoppingListServie {
    ingredientChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
  private  ingredients :Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 5),
        new Ingredient('Potato', 9)
      ]

      getIngredient(){
        return this.ingredients.slice();
      }
 
      getIngredients(index: number){
        return this.ingredients[index]
        console.log('it is called')
      }


      addIngredient(ingredient : Ingredient){
         this.ingredients.push(ingredient);
         this.ingredientChanged.next(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients)
        this.ingredientChanged.next(this.ingredients.slice());
      }
      updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientChanged.next(this.ingredients.slice())
      }

      deleteIngredient(index: number){
        this.ingredients.splice(index,1);
        this.ingredientChanged.next(this.ingredients.slice())
      }
}