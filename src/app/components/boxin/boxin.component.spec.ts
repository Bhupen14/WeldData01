import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxinComponent } from './boxin.component';

describe('BoxinComponent', () => {
  let component: BoxinComponent;
  let fixture: ComponentFixture<BoxinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
