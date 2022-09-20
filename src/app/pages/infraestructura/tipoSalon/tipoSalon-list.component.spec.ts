import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TipoSalonListComponent } from "./tipoSalon-list.component";

describe("TipoSalonListComponent", () => {
  let component: TipoSalonListComponent;
  let fixture: ComponentFixture<TipoSalonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipoSalonListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoSalonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
