import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MainListFiltersForm} from "./main-list-filters.form";
import {FilteringParams, FilterPetsUsecase} from "../main-list-usecases/filter-pets.usecase";
import {City, cityEnumLabel} from "../../../models/enums/city.enum";
import {Pet, petEnumLabel} from "../../../models/enums/pet.enum";
import {ListItem} from "../../../models/list-item.interface";

@Component({
  selector: 'app-main-list-filters',
  templateUrl: './main-list-filters.component.html',
  styleUrls: ['./main-list-filters.component.scss']
})
export class MainListFiltersComponent implements OnInit {
  constructor(private filterPetsUsecase: FilterPetsUsecase) {
  }

  @Output() refreshPetsList = new EventEmitter<ListItem[]>()

  cities = Object.keys(City).filter((cityEnum) => typeof City[cityEnum as keyof typeof City] === "number");
  pets = Object.keys(Pet).filter((petEnum) => typeof Pet[petEnum as keyof typeof Pet] === "number");
  filtersForm = new MainListFiltersForm()

  ngOnInit() {
    this.filterPetsUsecase.execute({} as FilteringParams).subscribe((petsList: ListItem[]) => {
      this.refreshPetsList.emit(petsList)
    })
    this.filtersForm.valueChanges.subscribe((change) => {
      this.filterPetsUsecase.execute(change).subscribe((petsList: ListItem[]) => {
        this.refreshPetsList.emit(petsList)
      })
    })
  }

  updateDateRange(selectedDate: any) {
    const startDate = selectedDate[0];
    const endDate = selectedDate[1];
    this.filtersForm.dateFrom.setValue(startDate);
    this.filtersForm.dateTo.setValue(endDate);
  }

  protected readonly petEnumLabel = petEnumLabel;
  protected readonly cityEnumLabel = cityEnumLabel;
  protected readonly City = City;
}
