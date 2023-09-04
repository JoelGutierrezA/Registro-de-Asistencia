import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MycursoPage } from './mycurso.page';

describe('MycursoPage', () => {
  let component: MycursoPage;
  let fixture: ComponentFixture<MycursoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MycursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
