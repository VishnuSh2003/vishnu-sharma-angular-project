import {Component, Input} from '@angular/core';
import {Fighter} from "../shared/models/user";
import {CurrencyPipe, NgIf, PercentPipe, UpperCasePipe} from "@angular/common";
import {NameCombinePipePipe} from "../name-combine-pipe.pipe";

@Component({
  selector: 'app-fighter-list-item',
  standalone: true,
  imports: [
    NgIf,
    UpperCasePipe,
    CurrencyPipe,
    PercentPipe,
    NameCombinePipePipe
  ],
  templateUrl: './fighter-list-item.component.html',
  styleUrl: './fighter-list-item.component.css'
})
export class FighterListItemComponent {
@Input() fighter?:Fighter;
}
