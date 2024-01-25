import "../src/app/globals.css";
import React, { useState, useEffect } from 'react';
import Calendar from '../src/components/Calendar/Calendar'; // Adjust path as needed
import { ApiResponse } from '@/types/gameTypes';

export default function Home() {
    const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/api/games?dates=2024-01-01,2024-03-28');
            const data = await response.json();
            console.log("Api response", data);
            setApiResponse(data);
        };

        fetchData();
    }, []);

    return (
        <div>
        {apiResponse?.results ? (
            // Render your calendar component with the data
            <Calendar apiResponse={apiResponse} />
        ) : (
            // Render a loading indicator or a message
            <div className="text-3xl font-bold underline">
                <p>Loading...</p>

            </div>
        )}
    </div>
    );
}