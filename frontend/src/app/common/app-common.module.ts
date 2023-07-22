import {NgModule} from "@angular/core";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {MenubarModule} from 'primeng/menubar';
import {SidebarModule} from "primeng/sidebar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ButtonModule} from "primeng/button";
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent
  ],
  imports: [MenubarModule, SidebarModule, BrowserAnimationsModule, ButtonModule],
  providers: [],
  exports: [
    SidebarComponent,
    HeaderComponent
  ]
})
export class AppCommonModule {
}
