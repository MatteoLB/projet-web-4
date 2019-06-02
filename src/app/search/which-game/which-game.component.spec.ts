import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhichGameComponent } from './which-game.component';

describe('WhichGameComponent', () => {
  let component: WhichGameComponent;
  let fixture: ComponentFixture<WhichGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhichGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhichGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
