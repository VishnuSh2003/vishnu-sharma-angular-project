import {Component, Input} from '@angular/core';
import {Fighter} from "../shared/models/user";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-fighter-list-item',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './fighter-list-item.component.html',
  styleUrl: './fighter-list-item.component.css'
})
export class FighterListItemComponent {
@Input() fighter!:Fighter;
}
