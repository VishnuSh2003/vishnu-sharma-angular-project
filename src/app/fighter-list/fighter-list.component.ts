import {Component, OnInit} from '@angular/core';
import {Fighter} from "../shared/models/user";
import {FighterListItemComponent} from "../fighter-list-item/fighter-list-item.component";
import {NgForOf} from "@angular/common";
import { fighters } from '../Data/mock-content';
import {FighterService} from "../Service/fighter.service";

@Component({
  selector: 'app-fighter-list',
  standalone: true,
  imports: [
    FighterListItemComponent,
    NgForOf
  ],
  templateUrl: './fighter-list.component.html',
  styleUrl: './fighter-list.component.css',
})
export class FighterListComponent implements OnInit{
  fighters:Fighter[] = [];

  constructor(private fighterService: FighterService) {
  }
  ngOnInit() :void{
    this.fighterService.getFighters().subscribe( fighters => {
      this.fighters = fighters;
    });
  }

}
