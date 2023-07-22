import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {MapOptions} from 'leaflet';

@Component({
  selector: 'app-main-list-map',
  templateUrl: './main-list-map.component.html',
  styleUrls: ['./main-list-map.component.scss']
})
export class MainListMapComponent implements OnInit {
  map: L.Map = {} as L.Map
  private readonly DEFAULT_ZOOM = 6
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
}
