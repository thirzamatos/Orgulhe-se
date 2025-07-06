import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilVendComponent } from './perfil-vend.component';

describe('PerfilVendComponent', () => {
  let component: PerfilVendComponent;
  let fixture: ComponentFixture<PerfilVendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilVendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilVendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
