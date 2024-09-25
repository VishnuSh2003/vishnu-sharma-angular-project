import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {JsonPipe, NgForOf} from "@angular/common";
import {Fighter} from "./shared/models/user";
import {FighterListComponent} from "./fighter-list/fighter-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, FighterListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  eventUFC = 'UFC Fight Day';
  Name = 'Vishnu Sharma';
  Slogan= 'Fight for Glory, Fight for Victory';

  fighters: Fighter[] = [
    { fighterid: 1, firstName: 'Conor', lastName: 'McGregor', weightClass: 'Lightweight', wins:22 ,losses:6  , isChampion:true },
    { fighterid: 2, firstName: 'Khabib', lastName: 'Nurmagomedov', weightClass: 'lightweight', wins: 29 , losses:  0, isChampion:true},
    { fighterid: 3, firstName: 'Amandaa', lastName: 'Nunes', weightClass: 'Featherweight' ,wins:21 , losses:5  , isChampion:true},
    { fighterid: 4, firstName: 'Tony', lastName: 'Ferguson', weightClass: 'Heavyweight', wins: 25 ,losses: 7 ,isChampion:false},
    { fighterid: 5, firstName: 'Poirier', lastName: 'Dustin', weightClass: 'Lightweight',wins:28  , losses: 7  },
    { fighterid: 6, firstName: 'Stipe', lastName: 'Miocic', weightClass: 'Lightweight', wins:20  , losses: 4 , isChampion:true}
  ];

}
