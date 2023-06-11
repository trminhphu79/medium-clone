import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewPostActionComponent } from './new-post-action.component';

describe('NewPostActionComponent', () => {
  let component: NewPostActionComponent;
  let fixture: ComponentFixture<NewPostActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewPostActionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewPostActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
