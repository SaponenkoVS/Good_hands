import {Component, Input} from '@angular/core';
import {ListItem} from "../../../models/list-item.interface";
import {enumLabel} from "../../../models/enums/animal";

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent {
  @Input() pet: ListItem = {} as ListItem
  protected readonly enumLabel = enumLabel;
}
