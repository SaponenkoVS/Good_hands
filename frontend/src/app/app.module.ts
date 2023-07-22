import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppCommonModule} from "./common/app-common.module";
import {HttpClientModule} from "@angular/common/http";
import {MainListModule} from "./components/main-list/main-list.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppCommonModule,
    HttpClientModule,
    MainListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
