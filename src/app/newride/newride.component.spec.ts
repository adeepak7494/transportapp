import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewrideComponent } from './newride.component';

describe('NewrideComponent', () => {
  let component: NewrideComponent;
  let fixture: ComponentFixture<NewrideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewrideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
