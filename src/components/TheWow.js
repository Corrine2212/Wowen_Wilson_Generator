import React from "react";

const TheWow = ({ wow }) => {
    return (
        <>
            <div className="wow-card">
                <div className="wow-details-wrapper">
                    <hr />
                    <h4>Wow Details:</h4>
                    <p id="wow-details">
                        <span>Movie:</span> {wow.movie}
                    </p>
                    <p id="wow-details">
                        <span>Release Date:</span> {wow.release_date}
                    </p>
                    <p id="wow-details">
                        <span>Director:</span> {wow.director}
                    </p>
                    <p id="wow-details">
                        <span>Character:</span> {wow.character}
                    </p>
                    <p id="wow-details">
                        <span>Movie Duration:</span> {wow.movie_duration}
                    </p>
                    <p id="wow-details">
                        <span>Timestamp:</span> {wow.timestamp}
                    </p>
                    <p id="wow-details">
                        <span>Full Line:</span> <i>"{wow.full_line}"</i>
                    </p>
                    <p id="wow-details">
                        <span>Current wow in Movie:</span> {wow.current_wow_in_movie}
                    </p>
                    <p id="wow-details">
                        <span>Total wow's in Movie:</span> {wow.total_wows_in_movie}
                    </p>
                </div>

                <img src={wow.poster} alt={`${wow.movie} poster`} className="wow-img" />
                <video width="640" height="360" controls>
                    <source src={wow.video["1080p"]} type="video/mp4" />
                    <source src={wow.video["720p"]} type="video/mp4" />
                    <source src={wow.video["480p"]} type="video/mp4" />
                    <source src={wow.video["360p"]} type="video/mp4" />
                </video>
            </div>
        </>
    );
};

export default TheWow;

// import React from "react";

// const TheWow = ({ wow }) => {
//     console.log(wow);
//     return (

//         <div className="wow-card">
//             <div className="wow-details-wrapper">
//                 <hr/>
//                 <h4>Wow Details:</h4>
//                 <p id="wow-details">
//                     <span>Movie:</span> {wow.movie}
//                 </p>
//                 <p id="wow-details">
//                     <span>Release Date:</span> {wow.release_date}
//                 </p>
//                 <p id="wow-details">
//                     <span>Director:</span> {wow.director}
//                 </p>
//                 <p id="wow-details">
//                     <span>Character:</span> {wow.character}
//                 </p>
//                 <p id="wow-details">
//                     <span>Movie Duration:</span> {wow.movie_duration}
//                 </p>
//                 <p id="wow-details">
//                     <span>Timestamp:</span> {wow.timestamp}
//                 </p>
//                 <p id="wow-details">
//                     <span>Full Line:</span> <i>"{wow.full_line}"</i>
//                 </p>
//                 <p id="wow-details">
//                     <span>Current wow in Movie:</span> {wow.current_wow_in_movie}
//                 </p>
//                 <p id="wow-details">
//                     <span>Total wow's in Movie:</span> {wow.total_wows_in_movie}
//                 </p>
//             </div>
//             <img src={wow.poster} alt="Movie poster" className="wow-img"></img>
//                 <video controls>
//                     <source src={wow.video["1080p"]} type="video/mp4"></source>
//                 </video>
//         </div>

//     );
// };

// export default TheWow;
