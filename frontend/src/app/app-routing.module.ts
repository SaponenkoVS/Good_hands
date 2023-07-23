import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: "pets-list", pathMatch: "full"},
  {
    path: "pets-list", loadChildren: () =>
      import("./components/main-list/main-list.module").then((m) =>
        m.MainListModule
      )
  },
  {
    path: "add-pet", loadChildren: () =>
      import("./components/add-pet/add-pet.module").then((m) =>
        m.AddPetModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
