import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
 recipe: Recipe;
id: number
  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService, 
    private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
         this.id= +params['id'];
         this.recipe= this.recipeService.getRecipeById(this.id);
      }
    )
  }
  onAddToShoppingList(){
    this.recipeService.onIngredientAddToList(this.recipe.ingredients);
  }
  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

}
