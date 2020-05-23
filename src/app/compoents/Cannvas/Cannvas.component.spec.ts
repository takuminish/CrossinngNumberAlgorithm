/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CannvasComponent } from './Cannvas.component';

describe('CannvasComponent', () => {
  let component: CannvasComponent;
  let fixture: ComponentFixture<CannvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CannvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CannvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
