import React from "react";
import { useState } from "react";
import "../css/MovieBooking.css";


//Page 1 - 20 - Show List of Movies (Add few images and arrange it in 4x4 structure)
//Page 2 - 20 - click on movie, go to movie details page, click on book seat
//Page 3 - 30 - fill the form - name, email, mobile, submit button.
//Page 4 - 30 - seat booked screen with random booking id, also show name, email and mobile filled.

function MovieBooking() {
    const [count, setCount] = useState(0);
    const [showPage, setShowPage] = useState(1);
    const [selectedMovie, setSelectedMovie] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [bookingId, setBookingId] = useState("");
    const [movies] = useState([

        {
        name: "War",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0OCbYSOBNWpDgI2_AJAkNHWOwtFCAdsR62Q&s",
        },
        {
        name: "Captain America",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwXNXOyPN9o4-LmIbOTwvrcc_XqmFe5TgU1w&s",
        },
        {
        name: "Neerja",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYSq0q4uL90CK88ivOkTOMy09fUG_yTIk1_w&s",
        },
        {
        name: "Border",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx5xwHRIb6gOY9QV47K4gVkW2HI1qHm6pEKg&s",
        },
        {
        name: "Avataar",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx2SCB8sQ50kBKaiFaK3ye10ad8DE_gXtpEw&s",
        },
        {
        name: "Singham",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSot-v-0Bm7ubY4zxwzS36zsrTHIartEVu8mw&s",
        },
        {
        name: "Chennai Express",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1x4e1WnYL6Bx8APmyZOvgr_dghryNZDr70w&s",
        },
        {
        name: "Dilwale",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcaI6LB2cRKLeJ0stKa_QZUPFXMBefzdvBPA&s",
        },
        {
        name: "Dil Chahta Hai",
        image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/y/i/h/medium-dil-chahta-hai-movie-poster-for-room-office-multi-color-original-imagrffgdshma7rh.jpeg?q=90&crop=false",
        },
        {
        name: "Jab We Met",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQMq38G-6CvX3JKgF2sPw_s9OhbidRPSPPyA&s",
        },
        {
        name: "Dangal",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK3gNiB0u2QVIjV7JDDLnPTLYku5nDOz8lNA&s",
        },
        {
        name: "Titanic",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS76Z6FZgHPbkXpOmEnk4lo-6ZY8Q1eZ8SwqA&s",
        },
        {
        name: "Inception",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxqZ1oBzBnUj_kEbWAIo8uhI4ZmO49FY5_sQ&s",
        },
        {
        name: "Endgame",
        image: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg0",
        },
        {
        name: "Interstellar",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL0G60uV6nuIpSDORaWrNVgsSAcONZ7KwO6g&s",
        },
        {
        name: "Batman",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1uc8vNi_6wf8OP6WtAJrCTjaQ-k1piH2FOA&s",
        }
    ]);
    
    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
        setShowPage(2);
    };
    
    const handleBookSeat = () => {
        setShowPage(3);
    };
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const bookingId = Math.floor(Math.random() * 1000000);
        setBookingId(bookingId);
        setShowPage(4);
    };
    
    return (
        <div>
        {showPage === 1 && (
            <div className="movie-list">
            <h1>Movies</h1>
            <div className="grid-container">
                {movies.map((movie, index) => (
                <div key={index} className="movie-card" onClick={() => handleMovieClick(movie)}>
                    <img src={movie.image} alt={movie.name} />
                    <p className="movie-title">{movie.name}</p>
                </div>
                ))}
            </div>
            </div>
        )}
        {showPage === 2 && (
            <div>
            <h1>Movie Details</h1>
            <h2>{selectedMovie.name}</h2>
            <button onClick={handleBookSeat}>Book Seat</button>
            </div>
        )}  
        {showPage === 3 && (
            <div>
            <h1>Fill the form</h1>
            <form onSubmit={handleFormSubmit}>
                <label>Name</label>
                <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <label>Email</label>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <label>Mobile</label>
                <input
                type="number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            </div>
        )}
        {showPage === 4 && (
            <div>
            <h1>Seat Booked</h1>
            <p>Booking ID: {bookingId}</p>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Mobile: {mobile}</p>
            </div>
        )}
        </div>
    );
}

export default MovieBooking;
