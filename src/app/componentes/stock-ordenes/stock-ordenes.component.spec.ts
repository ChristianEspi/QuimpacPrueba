import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockOrdenesComponent } from './stock-ordenes.component';

describe('StockOrdenesComponent', () => {
  let component: StockOrdenesComponent;
  let fixture: ComponentFixture<StockOrdenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockOrdenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockOrdenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
