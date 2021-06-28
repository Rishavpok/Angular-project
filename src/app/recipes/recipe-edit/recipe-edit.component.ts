import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
id: number;
editMode = false;
recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
          this.id= +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
      }
    )
  }
  onSubmit(){
    console.log(this.recipeForm)
  }

  private initForm(){
    let RecipeName= '';
    let RecipeimagePath ='';
    let recipedescription = '';

    if(this.editMode){
     const recipe = this.recipeService.getRecipeById(this.id),
     RecipeName = recipe.name,
     RecipeimagePath = recipe.imagePath,
     recipedescription = recipe.description
     console.log('name' + RecipeName)
    }
  
   this.recipeForm = new FormGroup({
     'name': new FormControl(RecipeName),
     'imagePath' : new FormControl(RecipeimagePath),
     'description': new FormControl(recipedescription)
   });
  }

}
