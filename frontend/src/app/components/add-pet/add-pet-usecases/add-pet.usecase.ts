import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PetEntity} from "../../../models/pet.interafce";

@Injectable()
export class AddPetUsecase {
  PATH = "/api/pet/add-pet"

  constructor(private http: HttpClient) {
  }

  execute(pet: PetEntity): Observable<any[]> {
    return this.http.post(`${this.PATH}`, pet) as Observable<any>
  }
}
