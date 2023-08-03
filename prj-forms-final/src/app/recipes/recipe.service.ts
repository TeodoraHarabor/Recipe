import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Semisweet Chocolate Mousse',
      'Just awesome!',
      'https://www.tasteofhome.com/wp-content/uploads/2018/01/Semisweet-Chocolate-Mousse_EXPS_CF2BZ20_20300_B11_22_4b.jpg?resize=700,700',
      [
        new Ingredient('Cup semisweet chocolate chips', 1 / 4),
        new Ingredient('Tablespoon water', 1),
        new Ingredient('Egg yolk, lightly beaten', 1),
        new Ingredient('Teaspoons vanilla extract', 1),
        new Ingredient('Cup heavy whipping cream', 1 / 2),
        new Ingredient('Tablespoon sugar', 1),
      ]
    ),
    new Recipe(
      'Whipped Shortbread',
      'These whipped shortbread cookies melt in your mouth',
      'https://www.tasteofhome.com/wp-content/uploads/2018/01/Whipped-Shortbread_EXPS_HCCBZ19_2523_E05_23_3b-6.jpg?resize=700,700',
      [
        new Ingredient('cup butter, softened', 3),
        new Ingredient('cup confectioners sugar, sifted', 1),
        new Ingredient('cups all-purpose flour', 4),
        new Ingredient('cup cornstarch', 1),
      ]
    ),
    new Recipe(
      'Coconut Pistachio Pie',
      'The lightly toasted coconut crust pairs so well with the pistachio pudding',
      'https://www.tasteofhome.com/wp-content/uploads/2018/01/Coconut-Pistachio-Pie_EXPS_FT22_31851_F_0419_1.jpg?resize=700,700',
      [
        new Ingredient(
          '2-1/2 cups sweetened shredded coconut, lightly toasted',
          3
        ),
        new Ingredient('cup butter, melted', 1 / 3),
        new Ingredient('cups cold 2% milk', 2),
        new Ingredient(
          'packages (3.4 ounces each) instant pistachio pudding mix',
          2
        ),
        new Ingredient('cup whipped topping', 1),
      ]
    ),
    new Recipe(
      'No-Bake Chocolate Hazelnut Thumbprints',
      'Sweet snacks',
      'https://www.tasteofhome.com/wp-content/uploads/2018/01/No-Bake-Chocolate-Hazelnut-Thumbprints_EXPS_UCSBZ17_92915_B05_24_5b-1.jpg?resize=700,700',
      [
        new Ingredient('carton (8 ounces) spreadable cream cheese', 1),
        new Ingredient('cup semisweet chocolate chips, melted', 1),
        new Ingredient('cup Nutella', 1 / 2),
        new Ingredient('cups graham cracker crumbs', 2),
        new Ingredient('cup finely chopped hazelnuts, toasted', 1),
        new Ingredient('cup whole hazelnuts, toasted', 1),
      ]
    ),
    new Recipe(
      'Peanut Butter Cup Trifle',
      'A simple and delicious recipe',
      'https://www.tasteofhome.com/wp-content/uploads/2018/01/Peanut-Butter-Cup-Trifle_exps36133_SD142780D08_14_5bC_RMS.jpg?fit=700,1024',
      [
        new Ingredient('cups cold 2% milk', 4),
        new Ingredient(
          'packages (3.9 ounces each) instant chocolate pudding mix',
          2
        ),
        new Ingredient(
          'prepared angel food cake (8 to 10 ounces), cut into 1-inch cubes',
          1
        ),
        new Ingredient('carton (12 ounces) frozen whipped topping, thawed', 1),
        new Ingredient('packages (8 ounces each) mini peanut butter cups', 2),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
