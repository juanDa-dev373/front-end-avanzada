import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBusinessComponent } from './list-business.component';

describe('ListBusinessComponent', () => {
  let component: ListBusinessComponent;
  let fixture: ComponentFixture<ListBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListBusinessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
