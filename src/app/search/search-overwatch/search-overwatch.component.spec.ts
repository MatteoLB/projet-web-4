import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOverwatchComponent } from './search-overwatch.component';

describe('SearchOverwatchComponent', () => {
  let component: SearchOverwatchComponent;
  let fixture: ComponentFixture<SearchOverwatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchOverwatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOverwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
