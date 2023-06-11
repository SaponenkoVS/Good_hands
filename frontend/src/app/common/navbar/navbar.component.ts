import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  routes: MenuItem[] = [];

  ngOnInit() {
    this.routes = [
      {
        label: "Find pet",
        icon: "pi pi-search"
      },
      {
        label: "Add your pet to list",
        icon: "pi pi-plus"
      },
    ]
  }
}
