import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  routes: MenuItem[] = [];

  ngOnInit() {
    this.routes = [
      {
        label: "Find pet",
        icon: "pi pi-search",
        command: () => {
          this.router.navigate([""], {relativeTo: this.activatedRoute})
        }
      },
      {
        label: "Add your pet to list",
        icon: "pi pi-plus",
        command: () => {
          this.router.navigate(["add-pet"], {relativeTo: this.activatedRoute})
        }
      },
    ]
  }
}
