import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TahsinComponent } from './tahsin.component';

describe('TahsinComponent', () => {
  let component: TahsinComponent;
  let fixture: ComponentFixture<TahsinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TahsinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TahsinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
