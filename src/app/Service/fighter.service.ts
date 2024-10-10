import { fighters } from "../Data/mock-content";
import { Fighter } from "../shared/models/user";
import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class FighterService{
  private fighters : Fighter[]= fighters;

  constructor() {
  }
  getFighters() :Observable<Fighter[]>{
    return of(this.fighters);
  }
  // for add fighter
  addFighter(newFighter :Fighter): Observable<Fighter[]>{
    this.fighters.push (newFighter);
    return of (this.fighters);
  }
  // for update
  updateFighter(updateFighter :Fighter) :Observable<Fighter[]> {
    const index = this.fighters.findIndex(fighter => fighter.fighterid === updateFighter.fighterid);
    if (index !== -1) {
      this.fighters[index] = updateFighter;   //to update fighter in array
    }
    return of(this.fighters);
  }
    deleteFighter(fighterId : number): Observable<Fighter[]>{
    this.fighters= this.fighters.filter(fighter => fighter.fighterid);
    return of(this.fighters);
    }
    getFighterById(fighterId :number) :Observable<Fighter | undefined>{
    const fighter = this.fighters.find(fighter => fighter.fighterid === fighterId);
    return of(fighter);
  }


}
