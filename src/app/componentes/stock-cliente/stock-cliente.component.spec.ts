import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockClienteComponent } from './stock-cliente.component';

describe('StockClienteComponent', () => {
  let component: StockClienteComponent;
  let fixture: ComponentFixture<StockClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
