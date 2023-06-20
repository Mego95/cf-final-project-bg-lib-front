import { Component } from '@angular/core';
import { Boardgame, BoardgamesList } from '../interfaces/boardgame.interfaces';
import { BoardgamesService } from '../boardgames.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-boardgames-list',
  templateUrl: './boardgames-list.component.html',
  styleUrls: ['./boardgames-list.component.css']
})
export class BoardgamesListComponent {

  constructor(private service: BoardgamesService) {}

  boardgamesList: Boardgame[] = [];
  subscription: Subscription | undefined;

  ngOnInit(): void {
    this.subscription = this.service.getAll().subscribe({
      next: (apiData: BoardgamesList) => {
        const data = apiData.boardgames;;
        this.boardgamesList = data;
      },
      error: (error) => {
        console.log(error);
      }
    })
      
  }

  toggleFavorite(id: number | null): void {
    this.service.updateFavorite(id).subscribe((res) => {
      window.location.reload();
    })
  }

  onDelete(id: number | null): void {
    this.service.deleteBoardgame(id).subscribe((res) => {
      window.location.reload();
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
