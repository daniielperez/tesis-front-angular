import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueFormComponent } from './bloque-form.component';

describe('BloqueFormComponent', () => {
  let component: BloqueFormComponent;
  let fixture: ComponentFixture<BloqueFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloqueFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloqueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
