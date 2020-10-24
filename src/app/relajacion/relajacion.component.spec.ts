import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelajacionComponent } from './relajacion.component';

describe('RelajacionComponent', () => {
  let component: RelajacionComponent;
  let fixture: ComponentFixture<RelajacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelajacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelajacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
