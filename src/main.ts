import { bootstrapApplication } from '@angular/platform-browser';
import {provideRouter, Routes} from "@angular/router";
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {FighterListItemComponent} from "./app/fighter-list-item/fighter-list-item.component";
import {FighterListComponent} from "./app/fighter-list/fighter-list.component";

const routes: Routes = [
  {path:'', redirectTo: '/fighters', pathMatch: 'full'},
  {path:'fighters', component: FighterListComponent},
  {path:'fighters/:firstName', component: FighterListItemComponent}
]

bootstrapApplication(AppComponent, {providers: [provideRouter(routes)]
}). then(r=> console.log('Bootstrap successful'));
