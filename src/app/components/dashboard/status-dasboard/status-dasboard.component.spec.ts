import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusDasboardComponent } from './status-dasboard.component';

describe('StatusDasboardComponent', () => {
  let component: StatusDasboardComponent;
  let fixture: ComponentFixture<StatusDasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusDasboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
