import { bootstrapApplication } from '@angular/platform-browser';
import {provideRouter, Routes} from "@angular/router";
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {FighterListItemComponent} from "./app/fighter-list-item/fighter-list-item.component";
import {FighterListComponent} from "./app/fighter-list/fighter-list.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";

const routes: Routes = [
  {path:'', redirectTo: '/fighters', pathMatch: 'full'},
  {path:'fighters', component: FighterListComponent},
  {path:'fighters/:firstName', component: FighterListItemComponent},
  {path: 'modify-list-item', component: ModifyListItemComponent},
  {path: '**', component:PageNotFoundComponent}
]

bootstrapApplication(AppComponent, {providers: [provideRouter(routes)]
}). then(r=> console.log('Bootstrap successful'));
