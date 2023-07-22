import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardModule} from "primeng/card";
import {MainListComponent} from "./main-list.component";
import {MainListCardComponent} from "./main-list-card/main-list-card.component";
import {MainListRoutingModule} from "./main-list-routing.module";
import {MainListUsecasesModule} from "./main-list-usecases/main-list.usecases.module";
import {MainListMapComponent} from './main-list-map/main-list-map.component';


@NgModule({
  declarations: [
    MainListComponent,
    MainListCardComponent,
    MainListMapComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    MainListRoutingModule,
    MainListUsecasesModule
  ]
})
export class MainListModule {
}
