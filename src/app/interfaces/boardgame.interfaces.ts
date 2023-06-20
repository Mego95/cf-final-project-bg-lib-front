export interface Boardgame {
    id: number | null;
    userId: number | null;
    userName: string | null;
    bggId: string | null;
    boardgameName: string;
    minPlayers: number;
    maxPlayers: number;
    minPlayingTime: number;
    maxPlayingTime: number;
    complexityWeight: number;
    categories: string[] | null;
    favorite: boolean | null;
}

export interface BoardgamesList {
    boardgames: Boardgame[];
}