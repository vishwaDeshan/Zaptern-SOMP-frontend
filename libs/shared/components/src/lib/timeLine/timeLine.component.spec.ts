import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeLineComponent } from './timeLine.component';

describe('TimeLineComponent', () => {
  let component: TimeLineComponent;
  let fixture: ComponentFixture<TimeLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeLineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TimeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
