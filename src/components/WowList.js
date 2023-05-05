import React from 'react';
import TheWow from '../components/TheWow';


function WowList(props) {
  const { wows } = props;

  return (
    <>
      {wows.map((wow) => (
        <TheWow key={wow.timestamp} wow={wow} />
      ))}
    </>
  );
}

export default WowList;




// import React from 'react';
// import TheWow from '../components/TheWow';

// const WowList = ({ wows }) => {

//     const wowItems = wows.map((wow) => {
//             return <TheWow wow={wow} key={wow.movie} />;
        
//     });
    


//     return (
//         <>
//             <div className="wow-list">{wowItems}</div>
//         </>
//     );
// };

// export default WowList;




// import React, { useState } from 'react';
// import TheWow from '../components/TheWow';

// const WowList = ({ wows }) => {
//     const [selectedMovie, setSelectedMovie] = useState(null);

//     const handleChange = (event) => {
//         setSelectedMovie(event.target.value);
//     };

//     const filteredWows = selectedMovie
//         ? wows.filter((wow) => wow.movie === selectedMovie)
//         : wows;

//     const wowItems = filteredWows.map((wow) => {
//         return <TheWow wow={wow} key={wow.timestamp} />;
//     });

//     const movieOptions = [
//         <option key="default" value="">
//             Select a Movie
//         </option>,
//     ];

//     const movieSet = new Set(wows.map((wow) => wow.movie));
//     const movieArray = [];

//     for (let movie of movieSet) {
//         movieArray.push(
//             <option key={movie} value={movie}>
//                 {movie}
//             </option>
//         );
//     }

//     movieOptions.push(...movieArray);

//     return (
//         <>
//             <div className="wow-list">{wowItems}</div>

//             <div className="movie-select-wrapper">
//                 <label htmlFor="movie-select">Select a movie:</label>
//                 <select
//                     id="movie-select"
//                     name="movie-select"
//                     onChange={handleChange}
//                     value={selectedMovie}
//                 >
//                     {movieOptions}
//                 </select>
//             </div>
//         </>
//     );
// };

// export default WowList;
