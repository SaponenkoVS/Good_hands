import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainListComponent} from "./components/main-list/main-list.component";
import {AddPetComponent} from "./components/add-pet/add-pet.component";

const routes: Routes = [
  {path: 'main-list', component: MainListComponent},
  {path: "add-pet", component: AddPetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
