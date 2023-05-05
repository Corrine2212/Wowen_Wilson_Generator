import React, { useState, useEffect } from 'react';
import WowList from '../components/WowList';

const WowContainer = () => {
    const [wowData, setWowData] = useState([]);
    const [numWowItems, setNumWowItems] = useState(1);

    useEffect(() => {
        fetchWowData();
    }, [numWowItems]);

    const fetchWowData = async () => {
        const response = await fetch(
            `https://owen-wilson-wow-api.onrender.com/wows/random?results=${numWowItems}`
        );
        const data = await response.json();
        setWowData(data);
    };

    const handleNewWowClick = () => {
        fetchWowData();
    };

    const handleNumWowItemsChange = (event) => {
        const numItems = event.target.value;
        setNumWowItems(numItems);
    };

    return (
        <div>
            <h1>Wow List</h1>
            <label htmlFor="numWowItems">Number of Wow Items:</label>
            <input
                type="number"
                id="numWowItems"
                name="numWowItems"
                min="1"
                max="29"
                value={numWowItems}
                onChange={handleNumWowItemsChange}
            />
            <button onClick={handleNewWowClick}>Wow Me</button>
            {wowData && <WowList wows={wowData} />}
        </div>
    );
};

export default WowContainer;
