// src/components/Calendar/Calendar.tsx

import React, { useState, useEffect } from 'react';
import { ApiResponse, ProcessedGameData } from '../../types/gameTypes';
import processGameData from '../../utils/gameDataProcessor';
import './Calendar.css'; // Assuming you have a CSS file for styling

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
        <div className="calendar-container">
            {Object.entries(gameData).map(([date, game]) => (
                <div key={date} className="calendar-day">
                    <div className="game-info" style={{ backgroundImage: `url(${game.backgroundImage})` }}>
                        <span className="game-title">{game.name}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Calendar;
