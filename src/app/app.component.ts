import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {JsonPipe, NgForOf} from "@angular/common";
import {Fighter} from "./shared/models/user";
import {FighterListComponent} from "./fighter-list/fighter-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, FighterListComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UFC Fight Day';
  Name = 'Vishnu Sharma';
  Slogan= 'Fight for Glory, Fight for Victory';



}
