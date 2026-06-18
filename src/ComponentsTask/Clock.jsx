
import React, { useState, useEffect } from 'react';


export default function Clock({ timezone }) {
    const [time, setTime] = useState("");
    useEffect(() => {
        // 1. Function to fetch the current date and format it to IST

        const updateTime = () => {
            const now = new Date();
            const formattedTime = now.toLocaleTimeString('en-IN', {
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            });

            setTime(formattedTime);
        };

        updateTime();

        //every second
        const intervalId = setInterval(updateTime, 1000);



        return () => clearInterval(intervalId);
    }, []);

    return (
        <div style={{ textAlign: 'center', fontFamily: 'monospace', marginTop: '40px' }}>
            <h2> India Standard Time</h2>
            <h1 style={{ fontSize: '3rem', color: '#ff9933' }}>{time || 'Loading...'}</h1>
        </div>
    );
}


