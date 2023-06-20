import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardgameInsertComponent } from './boardgame-insert.component';

describe('BoardgameInsertComponent', () => {
  let component: BoardgameInsertComponent;
  let fixture: ComponentFixture<BoardgameInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardgameInsertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardgameInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
