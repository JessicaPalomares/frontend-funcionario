import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { FuncionarioRead2Component } from './funcionario-read2.component';

describe('FuncionarioRead2Component', () => {
  let component: FuncionarioRead2Component;
  let fixture: ComponentFixture<FuncionarioRead2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionarioRead2Component ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioRead2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
