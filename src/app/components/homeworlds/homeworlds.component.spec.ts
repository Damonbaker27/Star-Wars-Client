import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworldsComponent } from './homeworlds.component';

describe('HomeworldsComponent', () => {
  let component: HomeworldsComponent;
  let fixture: ComponentFixture<HomeworldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeworldsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeworldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
