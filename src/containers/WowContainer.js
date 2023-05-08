import React, { useState, useEffect } from 'react';
import WowList from '../components/WowList';

// define fetchWowData function outside of component, accesses the data from api
const fetchWowData = (numWowItems, selectedMovie) => {
    let url = `https://owen-wilson-wow-api.onrender.com/wows/random?results=${numWowItems}`;
    if (selectedMovie) {
        url += `&movie=${encodeURIComponent(selectedMovie)}`;
    }
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error(error));
};

// define fetchMovieList function outside of the component, accesses the movies list from the api
const fetchMovieList = () => {
    return fetch('https://owen-wilson-wow-api.onrender.com/wows/movies')
        .then(response => response.json())
        .catch(error => console.error(error));
};

// defines WowContainer component and the state variables using useState hook
const WowContainer = () => {
    const [wowData, setWowData] = useState([]);
    const [numWowItems, setNumWowItems] = useState(1); // value set to 1. useState hook returns an array with 2 elements, the first element is the current state value (1). The value gets re rendered when the function is called.
    const [selectedMovie, setSelectedMovie] = useState(''); 
    const [movies, setMovies] = useState([]); // this sets the list of movies

// useEffect hook fetches wow data when numWowItems or selectedMovie changes
    useEffect(() => {
        fetchWowData(numWowItems, selectedMovie)
            .then(data => setWowData(data));
    }, [numWowItems, selectedMovie]);

// useEffect hook fetches movie list
    useEffect(() => {
        fetchMovieList()
            .then(data => setMovies(data));
    }, []);

// all the event handlers
    const handleNewWowClick = () => {
        fetchWowData(numWowItems, selectedMovie)
            .then(data => setWowData(data));
    };

    const handleNumWowItemsChange = (event) => {
        const numItems = event.target.value;
        setNumWowItems(numItems);
    };

    const handleMovieSelect = (event) => {
        const selected = event.target.value;
        setSelectedMovie(selected);
    };

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
        
            {/* rendered wowData as props */}
            {wowData && <WowList wows={wowData} />} 
        </>
    );
};

export default WowContainer;
