import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardgamesListComponent } from './boardgames-list.component';

describe('BoardgamesListComponent', () => {
  let component: BoardgamesListComponent;
  let fixture: ComponentFixture<BoardgamesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardgamesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardgamesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
