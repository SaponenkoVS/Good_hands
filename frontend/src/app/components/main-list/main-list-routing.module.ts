import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainListComponent} from "./main-list.component";

const routes: Routes = [
  {path: '', component: MainListComponent},
  {
    path: ":id", loadChildren: () =>
      import("../pet-details/pet-details.module").then((m) =>
        m.PetDetailsModule
      )
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainListRoutingModule {
}
