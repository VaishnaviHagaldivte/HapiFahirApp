import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientstableComponent } from './patientstable.component';

describe('PatientstableComponent', () => {
  let component: PatientstableComponent;
  let fixture: ComponentFixture<PatientstableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientstableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
