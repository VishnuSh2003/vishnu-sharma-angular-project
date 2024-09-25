import {Component, Input} from '@angular/core';
import {Fighter} from "../shared/models/user";

@Component({
  selector: 'app-fighter-list-item',
  standalone: true,
  imports: [],
  templateUrl: './fighter-list-item.component.html',
  styleUrl: './fighter-list-item.component.css'
})
export class FighterListItemComponent {
@Input() fighter!:Fighter;
}
