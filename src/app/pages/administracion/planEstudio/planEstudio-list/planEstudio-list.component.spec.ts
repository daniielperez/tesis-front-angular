import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PlanEstudioListComponent } from "./planEstudio-list.component";

describe("PlanEstudioListComponent", () => {
  let component: PlanEstudioListComponent;
  let fixture: ComponentFixture<PlanEstudioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanEstudioListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanEstudioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
