import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickrideComponent } from './pickride.component';

describe('PickrideComponent', () => {
  let component: PickrideComponent;
  let fixture: ComponentFixture<PickrideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickrideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
