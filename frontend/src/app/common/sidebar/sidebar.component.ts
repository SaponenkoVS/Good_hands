import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Role} from "../../models/enums/role.enum";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  sidebarVisible = false

  toPetsListPage() {
    this.router.navigateByUrl('')
    this.sidebarVisible = false
  }

  toAddPetPage() {
    this.router.navigateByUrl("/add-pet")
    this.sidebarVisible = false
  }

  toWriteEmailToUsPage() {
    this.router.navigateByUrl("/write-message-to-us")
    this.sidebarVisible = false
  }

  toLoginPage() {
    this.router.navigateByUrl("/login")
    this.sidebarVisible = false
  }

  toRegistrationPage(role: Role) {
    this.router.navigateByUrl("/registration")
    this.sidebarVisible = false
  }
}
