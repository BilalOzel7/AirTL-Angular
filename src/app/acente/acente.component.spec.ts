import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcenteComponent } from './acente.component';

describe('AcenteComponent', () => {
  let component: AcenteComponent;
  let fixture: ComponentFixture<AcenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
