import React, { useState, useEffect } from 'react';
import WowList from '../components/WowList';

const WowContainer = () => {
    const [wowData, setWowData] = useState([]);
    const [numWowItems, setNumWowItems] = useState(1);
    const [selectedMovie, setSelectedMovie] = useState('');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchWowData();
    }, [numWowItems, selectedMovie]);

    const fetchWowData = async () => {
        let url = `https://owen-wilson-wow-api.onrender.com/wows/random?results=${numWowItems}`;
        if (selectedMovie) {
            url += `&movie=${selectedMovie}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setWowData(data);
    };


    const fetchMovieList = async () => {
        const response = await fetch(
            `https://owen-wilson-wow-api.onrender.com/wows/movies`
        );
        const data = await response.json();
        setMovies(data);
    };

    const handleNewWowClick = () => {
        fetchWowData();
    };

    const handleNumWowItemsChange = (event) => {
        const numItems = event.target.value;
        setNumWowItems(numItems);
    };

    const handleMovieSelect = (event) => {
        const selected = event.target.value;
        setSelectedMovie(selected);
    };

    useEffect(() => {
        fetchMovieList();
    }, []);

    return (
        <>
            <div id='wow-form-wrapper'>
                <div>
                    <label htmlFor="numWowItems">No. of Wows:</label>
                    <input
                        type="number"
                        id="numWowItems"
                        name="numWowItems"
                        min="1"
                        max="29"
                        value={numWowItems}
                        onChange={handleNumWowItemsChange}
                    />
                
                    <label htmlFor="movieSelect">Select a Movie:</label>
                    <select id="movieSelect" value={selectedMovie} onChange={handleMovieSelect}>
                        <option value="">All Movies</option>
                        {movies.map((movie, index) => (
                            <option key={index} value={movie}>
                                {movie}
                            </option>
                        ))}
                    </select>
                        <button onClick={handleNewWowClick}>WOW ME</button>
                </div>
            </div>
            {wowData && <WowList wows={wowData} />}

        </>
    );
};

export default WowContainer;
