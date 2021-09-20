/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RezervasyonFalseComponent } from './rezervasyon-false.component';

describe('RezervasyonFalseComponent', () => {
  let component: RezervasyonFalseComponent;
  let fixture: ComponentFixture<RezervasyonFalseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RezervasyonFalseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RezervasyonFalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
