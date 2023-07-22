import {Component, OnInit} from '@angular/core';
import {GetPetListUsecase} from "./main-list-usecases/get-pet-list.usecase";
import {ListItem} from "../../models/list-item.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit {
  constructor(private getPetsList: GetPetListUsecase, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  petsList: ListItem[] = []

  ngOnInit() {
    this.petsList = this.getPetsList.execute()
  }

  toPetDetails(id: string) {
    this.router.navigate([id], {relativeTo: this.activatedRoute})
  }

}
