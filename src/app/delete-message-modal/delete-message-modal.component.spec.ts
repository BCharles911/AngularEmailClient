import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMessageModalComponent } from './delete-message-modal.component';

describe('DeleteMessageModalComponent', () => {
  let component: DeleteMessageModalComponent;
  let fixture: ComponentFixture<DeleteMessageModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMessageModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMessageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
