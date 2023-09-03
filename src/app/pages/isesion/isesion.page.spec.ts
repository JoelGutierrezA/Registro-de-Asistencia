import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IsesionPage } from './isesion.page';

describe('IsesionPage', () => {
  let component: IsesionPage;
  let fixture: ComponentFixture<IsesionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IsesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
