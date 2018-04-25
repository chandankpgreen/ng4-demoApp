import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes =[
  {path: 'recipes', component: RecipesComponent},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: '', redirectTo: '/recipes', pathMatch:'full'},
  // {path: '*', component: AppComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
