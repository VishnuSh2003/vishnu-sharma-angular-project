import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FighterListItemComponent } from './fighter-list-item.component';

describe('FighterListItemComponent', () => {
  let component: FighterListItemComponent;
  let fixture: ComponentFixture<FighterListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FighterListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FighterListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
