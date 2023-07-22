import {Component} from '@angular/core';
import {ListItem} from "../../models/list-item.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  petsList: ListItem[] = []

  toPetDetails(id: string) {
    this.router.navigate([id], {relativeTo: this.activatedRoute})
  }

  refreshPetsList(petsList: ListItem[]) {
    this.petsList = petsList
  }
}
