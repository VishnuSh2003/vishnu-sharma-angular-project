import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Fighter} from "../shared/models/user";
import {ActivatedRoute, Router} from "@angular/router";
import {FighterService} from "../Service/fighter.service";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent implements OnInit {
fighterForm: FormGroup;
fighter: Fighter | undefined;
error: string | null=null;

constructor(
  private fb:FormBuilder,
  private route: ActivatedRoute,
  private fighterService: FighterService,
  private router: Router
) {
  this.fighterForm= this.fb.group({
  fighterid: [0,Validators.required],
    firstName:['',Validators.required],
    lastName: ['',Validators.required],
    weightClass: ['',Validators.required],
    wins: [0,[Validators.required,Validators.min(0)]],
    losses: [0,[Validators.required, Validators.min(0)]],
    isChampion: [false],
    minePictures: ['',Validators.required]
  });
}
ngOnInit():void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  if (id){
    this.fighterService.getFighterById(id).subscribe({
      next: fighter=>{
        if(fighter){
          this.fighterForm.patchValue(fighter);
        }
      },
      error: err=>{
        this.error='Error fetching fighter';
        console.error('Error fetching fighter:',err);
      }
    });
  }
}
onSubmit(): void{
  if (this.fighterForm.valid){
    const fighter: Fighter= this.fighterForm.value;
    if(fighter.fighterid){
      this.fighterService.updateFighter(fighter).subscribe(() =>this.router.navigate(['/fighters']));
    }else{
      fighter.fighterid= this.fighterService.generateNewId();
      this.fighterService.addFighter(fighter).subscribe(() => this.router.navigate(['/fighters']));

    }
  }
}
onDelete(): void{
  const id= this.fighterForm.value.fighterid;
  if(id){
    this.fighterService.deleteFighter(id).subscribe(()=> this.router.navigate(['/fighters']));
  }
}
navigateToFighterList(): void{
  this.router.navigate(['/fighters']);
}
}
