import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class GeocodeUsecase {
  PATH = "https://nominatim.openstreetmap.org/search?"

  constructor(private http: HttpClient) {
  }

  execute(address: string): Observable<any[]> {
    return this.http.get(`${this.PATH}q=${address},Poland&format=jsonv2`) as Observable<any[]>
  }
}
