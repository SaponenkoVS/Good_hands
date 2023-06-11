import {NgModule} from "@angular/core";
import {NavbarComponent} from "./navbar/navbar.component";
import {MenubarModule} from 'primeng/menubar';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [MenubarModule],
  providers: [],
  exports: [
    NavbarComponent
  ]
})
export class AppCommonModule {
}
