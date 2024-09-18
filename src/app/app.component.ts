import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {JsonPipe, NgForOf} from "@angular/common";
import {User} from "./shared/models/user";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vishnu-sharma-angular-project';
  name = 'Vishnu Sharma';
  hobby= 'music';

  users: User[] = [
    { id: 1, firstName: 'Ajay', lastName: 'Singh', hobby: 'video editting', isAdmin: true },
    { id: 2, firstName: 'karan', lastName: 'Arjun', hobby: 'Movies', isAdmin: false },
    { id: 3, firstName: 'Jai', lastName: 'Vaishist', hobby: 'Cycling' },  // Optional isAdmin
    { id: 4, firstName: 'Diana', lastName: 'Richard', hobby: 'Gymnastics', isAdmin: true },
    { id: 5, firstName: 'Chris', lastName: 'Brown', hobby: 'Acting' },       // Optional isAdmin
    { id: 6, firstName: 'Mathew', lastName: 'haugs', hobby: 'Teaching', isAdmin: true }
  ];

}
