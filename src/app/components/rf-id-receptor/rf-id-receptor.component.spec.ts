import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RFIdReceptorComponent } from './rf-id-receptor.component';

describe('RFIdReceptorComponent', () => {
  let component: RFIdReceptorComponent;
  let fixture: ComponentFixture<RFIdReceptorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RFIdReceptorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RFIdReceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
