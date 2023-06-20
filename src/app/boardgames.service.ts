import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Boardgame, BoardgamesList } from './interfaces/boardgame.interfaces';

const BOARDGAME_API = 'http://localhost:8080/api/boardgames/';

@Injectable({
  providedIn: 'root'
})
export class BoardgamesService {

  constructor(private http: HttpClient) { }

  getAll() {
    let httpOptions = this.createHeaders();

    return this.http.get<BoardgamesList>(BOARDGAME_API, httpOptions);
  }
  
  updateFavorite(id: number | null) {
    let headers = this.createHeaders();
    return this.http.patch(`${BOARDGAME_API}${id}`, null, headers);
  }

  deleteBoardgame(id: number | null) {
    let headers = this.createHeaders();
    return this.http.delete(`${BOARDGAME_API}${id}`, headers);
  }

  insertCustomBoardgame(boardgame : Boardgame) {
    let headers = this.createHeaders();
    return this.http.post(BOARDGAME_API, boardgame, headers);
  }

  insertBggBoardgame(bggId: string) {
    let headers = this.createHeaders();
    return this.http.post(`${BOARDGAME_API}${bggId}`, null, headers);
  }

  private createHeaders() {
    let headers_obj = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("authToken")}`);
    const httpOptions = {
      headers: headers_obj
    };

    return httpOptions;
  }
}
