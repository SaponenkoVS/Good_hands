import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabViewModule} from 'primeng/tabview';
import {AddPetRoutingModule} from "./add-pet-routing.module";
import {AddPetComponent} from "./add-pet.component";
import {ButtonModule} from "primeng/button";
import {AppPetLocationComponent} from './app-pet-location/app-pet-location.component';
import {AddPetDataComponent} from './add-pet-data/add-pet-data.component';
import {CalendarModule} from "primeng/calendar";
import {DropdownModule} from "primeng/dropdown";
import {PaginatorModule} from "primeng/paginator";
import {ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {FileUploadModule} from "primeng/fileupload";


@NgModule({
  declarations: [AddPetComponent, AppPetLocationComponent, AddPetDataComponent],
  imports: [
    CommonModule,
    TabViewModule,
    AddPetRoutingModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    PaginatorModule,
    ReactiveFormsModule,
    InputTextModule,
    FileUploadModule
  ]
})
export class AddPetModule {
}
