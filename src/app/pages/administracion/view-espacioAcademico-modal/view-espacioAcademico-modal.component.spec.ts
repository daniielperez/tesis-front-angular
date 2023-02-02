/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ViewEspacioAcademicoModalComponent } from './view-espacioAcademico-modal.component';

describe('ViewEspacioAcademicoModalComponent', () => {
  let component: ViewEspacioAcademicoModalComponent;
  let fixture: ComponentFixture<ViewEspacioAcademicoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEspacioAcademicoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEspacioAcademicoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
