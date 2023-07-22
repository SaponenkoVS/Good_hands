import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ListItem} from "../../../models/list-item.interface";

@Injectable()
export class GetPetListUsecase {
  PATH = "pet"

  constructor(private http: HttpClient) {
  }

  execute() {
    //return this.http.get<ListItem[]>(this.PATH)
    return [{
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
    }] as ListItem[]
  }
}
