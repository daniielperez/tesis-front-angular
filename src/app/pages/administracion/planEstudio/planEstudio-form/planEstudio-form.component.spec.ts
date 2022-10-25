import { ComponentFixture, TestBed } from "@angular/core/testing";

import { EdificioFormComponent } from "./planEstudio-form.component";

describe("EdificioFormComponent", () => {
  let component: EdificioFormComponent;
  let fixture: ComponentFixture<EdificioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdificioFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdificioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
