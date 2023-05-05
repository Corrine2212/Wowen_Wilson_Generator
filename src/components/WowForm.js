// import React from 'react';
// import TheWow from './TheWow';

// const WowForm = ({ onRandomWow, wow }) => {
//     const getRandomWow = () => {
//         fetch(`https://owen-wilson-wow-api.onrender.com/wows/random`)
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log(data);
//                 const newWow = {
//                     movie: data[0].movie,
//                     release_date: data[0].release_date,
//                     director: data[0].director,
//                     character: data[0].character,
//                     movie_duration: data[0].movie_duration,
//                     timestamp: data[0].timestamp,
//                     full_line: data[0].full_line,
//                     current_wow_in_movie: data[0].current_wow_in_movie,
//                     total_wows_in_movie: data[0].total_wows_in_movie,
//                     poster: data[0].poster,
//                     video: data[0].video
//                 }
//                 onRandomWow(newWow);
//             })
//             .catch((err) => console.error(err));
//     };
    
//     return (
//         <div className="inputs">
//             <button onClick={getRandomWow}>Generate Random Wow</button>
//             {wow && <TheWow wow={wow} />}
//         </div>
//     )
// };

// export default WowForm;






// import React, { useState } from 'react';
// import TheWow from './TheWow';

// const WowForm = ({ options, movies, onSelectMovie, onGenerateWows, onRandomWow, wow }) => {
//     const [numOfWows, setNumOfWows] = useState(1);

//     const handleMovieChange = (event) => {
//         onSelectMovie(event.target.value);
//     }

//     const handleNumOfWowsChange = (event) => {
//         setNumOfWows(event.target.value)
//     }

//     const handleGenerateWows = (event) => {
//         event.preventDefault();
//         onGenerateWows(numOfWows);
//     };

//     const getRandomWow = () => {
//         fetch(`https://owen-wilson-wow-api.onrender.com/wows/random`)
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log(data);
//                 const newWow = {
//                     movie: data[0].movie,
//                     release_date: data[0].release_date,
//                     director: data[0].director,
//                     character: data[0].character,
//                     movie_duration: data[0].movie_duration,
//                     timestamp: data[0].timestamp,
//                     full_line: data[0].full_line,
//                     current_wow_in_movie: data[0].current_wow_in_movie,
//                     total_wows_in_movie: data[0].total_wows_in_movie,
//                     poster: data[0].poster,
//                     video: data[0].video
//                 }
    
//                 onRandomWow(newWow);
//             })
//             .catch((err) => console.error(err));
//     };
    
    
//     const handleRandomWow = (event) => {
//         event.preventDefault();
//         getRandomWow();
//     }

//     return (
//         <div className="inputs">
//             <label htmlFor="movie">Select a movie:</label>
//             {movies && movies.length > 0 ? (
//                 <select id="movie" onChange={handleMovieChange}>
//                     <option value="">--Select a movie--</option>
//                     {movies.map((movie) => (
//                         <option key={movie} value={movie}>
//                             {movie}
//                         </option>
//                     ))}
//                 </select>
//             ) : (
//                 <p>Loading movies...</p>
//             )}
//             <label htmlFor="numOfWows">Number of wows:</label>
//             <input
//                 type="number"
//                 id="numOfWows"
//                 min="1"
//                 max="10"
//                 value={numOfWows}
//                 onChange={handleNumOfWowsChange}
//             />
//             <button onClick={handleGenerateWows}>Give me {numOfWows} wow</button>
//             <button onClick={handleRandomWow}>Generate Random Wows</button>
//             {wow && <TheWow wow={wow} />}
//         </div>
//     )
// };

// export default WowForm;
