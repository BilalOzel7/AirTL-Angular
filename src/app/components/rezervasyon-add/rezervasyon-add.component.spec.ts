/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RezervasyonAddComponent } from './rezervasyon-add.component';

describe('RezervasyonAddComponent', () => {
  let component: RezervasyonAddComponent;
  let fixture: ComponentFixture<RezervasyonAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RezervasyonAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RezervasyonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
