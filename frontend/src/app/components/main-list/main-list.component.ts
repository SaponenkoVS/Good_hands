import {Component, OnInit} from '@angular/core';
import {GetPetListUsecase} from "../../usecases/get-pet-list.usecase";
import {ListItem} from "../../models/list-item.interface";

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit {
  constructor(private getPetsList: GetPetListUsecase) {
  }

  petsList: ListItem[] = []

  ngOnInit() {
    this.petsList = this.getPetsList.execute()
  }

}
