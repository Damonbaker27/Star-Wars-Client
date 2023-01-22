import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHomeworldComponent } from './view-homeworld.component';

describe('ViewHomeworldComponent', () => {
  let component: ViewHomeworldComponent;
  let fixture: ComponentFixture<ViewHomeworldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHomeworldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewHomeworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
