import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppCommonModule} from "./common/app-common.module";
import {ListCardComponent} from './components/main-list/list-card/list-card.component';
import {AddPetComponent} from './components/add-pet/add-pet.component';
import {MainListComponent} from "./components/main-list/main-list.component";
import {UsecasesModule} from "./usecases/usecases.module";
import {CardModule} from "primeng/card";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MainListComponent,
    ListCardComponent,
    AddPetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppCommonModule,
    CardModule,
    UsecasesModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
