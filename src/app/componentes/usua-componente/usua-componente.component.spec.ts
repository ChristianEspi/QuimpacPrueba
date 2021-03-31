import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuaComponenteComponent } from './usua-componente.component';

describe('UsuaComponenteComponent', () => {
  let component: UsuaComponenteComponent;
  let fixture: ComponentFixture<UsuaComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuaComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
