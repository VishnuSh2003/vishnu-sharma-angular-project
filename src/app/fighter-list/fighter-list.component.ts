import { Component } from '@angular/core';
import {Fighter} from "../shared/models/user";
import {FighterListItemComponent} from "../fighter-list-item/fighter-list-item.component";

@Component({
  selector: 'app-fighter-list',
  standalone: true,
  imports: [
    FighterListItemComponent
  ],
  templateUrl: './fighter-list.component.html',
  styleUrl: './fighter-list.component.css'
})
export class FighterListComponent {
  fighters:Fighter[] =[
    { fighterid: 1, firstName: 'Conor', lastName: 'McGregor', weightClass: 'Lightweight', wins:22 ,losses:6  , isChampion:true },
    { fighterid: 2, firstName: 'Khabib', lastName: 'Nurmagomedov', weightClass: 'lightweight', wins: 29 , losses:  0, isChampion:true},
    { fighterid: 3, firstName: 'Amandaa', lastName: 'Nunes', weightClass: 'Featherweight' ,wins:21 , losses:5  , isChampion:true},
    { fighterid: 4, firstName: 'Tony', lastName: 'Ferguson', weightClass: 'Heavyweight', wins: 25 ,losses: 7 ,isChampion:false},
    { fighterid: 5, firstName: 'Poirier', lastName: 'Dustin', weightClass: 'Lightweight',wins:28  , losses: 7  },
    { fighterid: 6, firstName: 'Stipe', lastName: 'Miocic', weightClass: 'Lightweight', wins:20  , losses: 4 , isChampion:true}
  ];
}
