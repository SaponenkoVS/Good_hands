import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ListItem} from "../models/list-item.interface";

@Injectable()
export class GetPetListUsecase {
  PATH = "pet"

  constructor(private http: HttpClient) {
  }

  execute() {
    return this.http.get<ListItem[]>(this.PATH)
  }
}
