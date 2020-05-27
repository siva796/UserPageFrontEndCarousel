import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftDeleteComponent } from './soft-delete.component';

describe('SoftDeleteComponent', () => {
  let component: SoftDeleteComponent;
  let fixture: ComponentFixture<SoftDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
