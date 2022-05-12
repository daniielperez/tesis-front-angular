import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueListComponent } from './bloque-list.component';

describe('BloqueListComponent', () => {
  let component: BloqueListComponent;
  let fixture: ComponentFixture<BloqueListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloqueListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloqueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
