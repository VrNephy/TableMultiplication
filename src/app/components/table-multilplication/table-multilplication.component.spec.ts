import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMultilplicationComponent } from './table-multilplication.component';

describe('TableMultilplicationComponent', () => {
  let component: TableMultilplicationComponent;
  let fixture: ComponentFixture<TableMultilplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMultilplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMultilplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
