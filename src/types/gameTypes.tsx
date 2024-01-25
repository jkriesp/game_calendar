export interface Game {
  slug: string;
  name: string;
  released: string;
  background_image: string;
  rating: number;
}

export interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
}

export interface ProcessedGameData {
  [date: string]: {
      name: string;
      backgroundImage: string;
      rating: number;
  };
}
