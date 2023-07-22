import {Component, ViewChild} from '@angular/core';
import {ListItem} from "../../models/list-item.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {MainListMapComponent} from "./main-list-map/main-list-map.component";

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent {
  @ViewChild('map') mainListMapComponent?: MainListMapComponent

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  petsList: ListItem[] = []

  toPetDetails(id: string) {
    this.router.navigate([id], {relativeTo: this.activatedRoute})
  }

  zoomMap(city: string) {
    this.mainListMapComponent?.zoomToCity(city)
  }

  refreshPetsList(petsList: ListItem[]) {
    this.petsList = petsList
  }
}
