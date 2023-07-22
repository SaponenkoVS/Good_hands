import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddPetComponent} from "./components/add-pet/add-pet.component";

const routes: Routes = [
  {path: '', redirectTo: "pets-list", pathMatch: "full"},
  {
    path: "pets-list", loadChildren: () =>
      import("./components/main-list/main-list.module").then((m) =>
        m.MainListModule
      )
  },
  {
    path: "add-pet", component: AddPetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
