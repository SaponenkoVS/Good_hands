import {Component, Input} from '@angular/core';
import {ListItem} from "../../../models/list-item.interface";
import {petEnumLabel} from "../../../models/enums/pet.enum";

@Component({
  selector: 'app-main-list-card',
  templateUrl: './main-list-card.component.html',
  styleUrls: ['./main-list-card.component.scss']
})
export class MainListCardComponent {
  @Input() pet: ListItem = {} as ListItem
  protected readonly petEnumLabel = petEnumLabel;
}
