import {Component, Input} from '@angular/core';
import {ListItem} from "../../../models/list-item.interface";
import {enumLabel} from "../../../models/enums/animal";

@Component({
  selector: 'app-main-list-card',
  templateUrl: './main-list-card.component.html',
  styleUrls: ['./main-list-card.component.scss']
})
export class MainListCardComponent {
  @Input() pet: ListItem = {} as ListItem
  protected readonly enumLabel = enumLabel;
}
