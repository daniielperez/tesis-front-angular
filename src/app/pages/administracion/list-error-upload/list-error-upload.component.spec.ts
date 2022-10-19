import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListErrorUploadComponent } from './list-error-upload.component';

describe('ListErrorUploadComponent', () => {
  let component: ListErrorUploadComponent;
  let fixture: ComponentFixture<ListErrorUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListErrorUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListErrorUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
