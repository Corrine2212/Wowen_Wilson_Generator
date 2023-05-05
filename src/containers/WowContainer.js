// import React, { useState, useEffect } from 'react';
// import WowList from '../components/WowList';

// const WowContainer = () => {
//     const [wows, setWows] = useState([]);
//     const [movies, setMovies] = useState([]);

//     useEffect(() => {
//         getWows();
//     }, []);

//     // const handleSelectMovie = (movie) => {
//     //     console.log(movie);
//     // };

//     const options = { method: 'GET', headers: { accept: 'application/json' } };

//     const getWows = function () {
//         fetch('https://owen-wilson-wow-api.onrender.com/wows/random', options)
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);
//                 setWows(data);
//                 setMovies(data.movies);
//             })
//             .catch(err => console.error(err));
//     };

//     const generateWows = function () {
//         fetch('https://owen-wilson-wow-api.onrender.com/wows/random', options)
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);
//                 setWows(prevWows => [...prevWows, data]);
//             })
//             .catch(err => console.error(err));
//     };

//     return (
//         <>
//             <div className='main-wow-container'>
//                 <button onClick={generateWows}>Generate Wow Quote</button>
//                 {wows.length > 0 && <WowList wows={wows} />}
//             </div>
//         </>
//     );
// };

// export default WowContainer;

import React, { useState, useEffect } from "react";
import WowList from "../components/WowList";

const WowContainer = () => {
    const [wowData, setWowData] = useState(null);

    useEffect(() => {
        fetchWowData();
    }, []);

    const fetchWowData = async () => {
        const response = await fetch(
            'https://owen-wilson-wow-api.onrender.com/wows/random'
        );
        const data = await response.json();
        setWowData(data[0]);
    };

    const handleNewWowClick = () => {
        fetchWowData();
    };

    return (
        <div>
            <h1>Wow List</h1>
            <button onClick={handleNewWowClick}>New Wow</button>
            {wowData && <WowList wows={[wowData]} />}
        </div>
    );
};

export default WowContainer;
