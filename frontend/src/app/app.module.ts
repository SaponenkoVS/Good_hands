import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppCommonModule} from "./common/app-common.module";
import {MainListComponent} from './main-list/main-list.component';
import {ListCardComponent} from './components/main-list/list-card/list-card.component';
import {AddPetComponent} from './components/add-pet/add-pet.component';

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
    AppCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
