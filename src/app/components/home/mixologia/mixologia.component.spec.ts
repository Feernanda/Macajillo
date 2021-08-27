import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixologiaComponent } from './mixologia.component';

describe('MixologiaComponent', () => {
  let component: MixologiaComponent;
  let fixture: ComponentFixture<MixologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixologiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MixologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
