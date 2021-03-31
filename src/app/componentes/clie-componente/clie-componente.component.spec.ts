import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClieComponenteComponent } from './clie-componente.component';

describe('ClieComponenteComponent', () => {
  let component: ClieComponenteComponent;
  let fixture: ComponentFixture<ClieComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClieComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClieComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
