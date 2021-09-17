/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SurucuComponent } from './surucu.component';

describe('SurucuComponent', () => {
  let component: SurucuComponent;
  let fixture: ComponentFixture<SurucuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurucuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurucuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
