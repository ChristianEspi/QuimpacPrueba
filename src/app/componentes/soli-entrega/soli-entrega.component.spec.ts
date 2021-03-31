import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoliEntregaComponent } from './soli-entrega.component';

describe('SoliEntregaComponent', () => {
  let component: SoliEntregaComponent;
  let fixture: ComponentFixture<SoliEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoliEntregaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoliEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
