import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {MapOptions} from 'leaflet';
import {GeocodeUsecase} from "../main-list-usecases/geocode.usecase";

@Component({
  selector: 'app-main-list-map',
  templateUrl: './main-list-map.component.html',
  styleUrls: ['./main-list-map.component.scss']
})
export class MainListMapComponent implements OnInit {
  constructor(private geocodeUsecase: GeocodeUsecase) {
  }

  map: L.Map = {} as L.Map
  private readonly DEFAULT_ZOOM = 6
  private readonly FOCUS_ZOOM = 11
  private readonly DEFAULT_CENTER = {
    center: [52, 19],
    zoom: this.DEFAULT_ZOOM
  }

  ngOnInit() {
    this.mapInit()
  }

  mapInit() {
    this.map = L.map("map", this.DEFAULT_CENTER as MapOptions)
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: this.DEFAULT_ZOOM,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
  }

  zoomToCity(city: string) {
    this.geocodeUsecase.execute(city).subscribe((res: any[]) => {
      this.map.setView({lat: res[0].lat, lng: res[0].lon}, this.FOCUS_ZOOM)
    })
  }
}
