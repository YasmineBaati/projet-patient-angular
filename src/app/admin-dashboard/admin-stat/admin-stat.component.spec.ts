import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStatComponent } from './admin-stat.component';

describe('AdminStatComponent', () => {
  let component: AdminStatComponent;
  let fixture: ComponentFixture<AdminStatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminStatComponent]
    });
    fixture = TestBed.createComponent(AdminStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
