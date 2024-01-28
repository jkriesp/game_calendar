import "../src/app/globals.css";
import React, { useState, useEffect } from 'react';
import Calendar from '../src/components/Calendar/Calendar'; // Adjust path as needed
import { ApiResponse } from '@/types/gameTypes';
import { Skeleton } from "@/components/ui/skeleton"


export default function Home() {
    const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);

    useEffect(() => {
        const fetchData = async () => {

            // Get today's date
            const today = new Date();

            // Format the start date as the frist day of the current month
            const startDate = new Date(today.getFullYear(), today.getMonth(), 1);
            const formattedStartDate = startDate.toISOString().split('T')[0];

            // Calculate the date 3 months from the start date
            const endDate = new Date(startDate);
            endDate.setMonth(endDate.getMonth() + 3);
            const formattedEndDate = endDate.toISOString().split('T')[0];

            const response = await fetch(`/api/games?dates=${formattedStartDate},${formattedEndDate}`);
            const data = await response.json();
            // Simulate a delay
            setTimeout(() => {
                setApiResponse(data);
            }, 0); // 3 seconds delay
        };

        fetchData();
    }, []);

    const skeletonCount = 2; // Number of skeleton cards to render

    return (
        <div className="bg-gradient-to-r  from-gray-950 to-blue-950 min-h-screen">
            <header className="text-center py-8">
                <h1 className="text-white text-4xl font-bold">Game Calendar</h1>
            </header>
            <div>
                {apiResponse?.results ? (
                    // Render your calendar component with the data
                    <Calendar apiResponse={apiResponse} />
                ) : (
                    Array.from({ length: skeletonCount }, (_, i) => (
                        <Skeleton key={i}  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 opacity-35">
                            <Skeleton className="h-48 bg-gradient-to-r from-sky-500 to-indigo-500"/> 
                            <Skeleton className="h-48 bg-gradient-to-r from-sky-500 to-indigo-500"/> 
                            <Skeleton className="h-48 bg-gradient-to-r from-sky-500 to-indigo-500"/> 
                            <Skeleton className="h-48 bg-gradient-to-r from-sky-500 to-indigo-500"/> 
                        </Skeleton>
                    ))

                )}
            </div>
        </div>

    );
}