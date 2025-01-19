import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplemanagmentComponent } from './templemanagment.component';

describe('TemplemanagmentComponent', () => {
  let component: TemplemanagmentComponent;
  let fixture: ComponentFixture<TemplemanagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplemanagmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplemanagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
