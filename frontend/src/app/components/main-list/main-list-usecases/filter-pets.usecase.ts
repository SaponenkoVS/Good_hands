import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {City} from "../../../models/enums/city.enum";
import {Pet} from "../../../models/enums/pet.enum";
import {of} from "rxjs";

@Injectable()
export class FilterPetsUsecase {
  PATH = "pet"

  constructor(private http: HttpClient) {
  }

  execute(filteringParams: FilteringParams) {
    //return this.http.get<ListItem[]>(this.PATH)
    return of([{
      id: '1',
      kindOfAnimal: 0,
      species: "Bulldog",
      imageUrl: "dog.png",
      city: "Wrocław",
      price: 132,
      currency: "PLN"
    }, {
      id: '2',
      kindOfAnimal: 0,
      species: "Bulldog",
      imageUrl: "dog.png",
      city: "Wrocław",
      price: 132,
      currency: "PLN"
    }, {
      id: '3',
      kindOfAnimal: 0,
      species: "Bulldog",
      imageUrl: "dog.png",
      city: "Wrocław",
      price: 132,
      currency: "PLN"
    }, {
      id: '4',
      kindOfAnimal: 0,
      species: "Bulldog",
      imageUrl: "dog.png",
      city: "Wrocław",
      price: 132,
      currency: "PLN"
    }, {
      id: '5',
      kindOfAnimal: 0,
      species: "Bulldog",
      imageUrl: "dog.png",
      city: "Wrocław",
      price: 132,
      currency: "PLN"
    }, {
      id: '6',
      kindOfAnimal: 0,
      species: "Bulldog",
      imageUrl: "dog.png",
      city: "Wrocław",
      price: 132,
      currency: "PLN"
    }, {
      id: '7',
      kindOfAnimal: 0,
      species: "Bulldog",
      imageUrl: "dog.png",
      city: "Wrocław",
      price: 132,
      currency: "PLN"
    }])
  }
}

export interface FilteringParams {
  dateFrom: Date,
  dateTo: Date,
  kindOfPet: Pet,
  city: City
}
