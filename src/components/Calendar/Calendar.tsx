import React, { useState, useEffect } from 'react';
import { ApiResponse, ProcessedGameData } from '../../types/gameTypes';
import processGameData from '../../utils/gameDataProcessor';

interface CalendarProps {
    apiResponse: ApiResponse;
}

const Calendar: React.FC<CalendarProps> = ({ apiResponse }) => {
    const [gameData, setGameData] = useState<ProcessedGameData>({});

    useEffect(() => {
        const processedData = processGameData(apiResponse);
        setGameData(processedData);
    }, [apiResponse]);

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4">
          {Object.entries(gameData).map(([date, game]) => (
              <div key={date} className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105">
                  <div 
                      className="w-full h-48 bg-cover bg-center" 
                      style={{ backgroundImage: `url(${game.backgroundImage})` }}
                  >
                      <div className="bg-black bg-opacity-50 flex flex-col justify-end h-full p-2  transition duration-700 hover:bg-opacity-0">
                          <span className="text-white text-lg font-bold text-center">{game.name}</span>
                          <span className="text-white text-base">{date}</span> {/* Displaying the release date */}
                      </div>
                  </div>
              </div>
          ))}
      </div>
  );
}

export default Calendar;
