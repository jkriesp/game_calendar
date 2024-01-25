import { ApiResponse, ProcessedGameData } from '../types/gameTypes';

export default function processGameData(apiResponse: ApiResponse): ProcessedGameData {
  const organizedData: ProcessedGameData = {};

  apiResponse.results.forEach(game => {
      if (!game.released) return; // Skip if release date is missing

      const currentGame = organizedData[game.released];
      console.log(game.released);

      if (!currentGame || game.rating > currentGame.rating) {
          organizedData[game.released] = {
              name: game.name,
              backgroundImage: game.background_image,
              rating: game.rating,
          };
      }
  });

  return organizedData;
}
