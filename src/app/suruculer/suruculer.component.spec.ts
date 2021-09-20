import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuruculerComponent } from './suruculer.component';

describe('SuruculerComponent', () => {
  let component: SuruculerComponent;
  let fixture: ComponentFixture<SuruculerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuruculerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuruculerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
