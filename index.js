// app.js

// Mock data for movies (you can extend this with more details)
const movies = [
    { id: 1, title: "The Shawshank Redemption", genre: "Drama", poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg" },
    { id: 2, title: "The Dark Knight", genre: "Action, Crime, Drama", poster: "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg" },
    { id: 3, title: "Inception", genre: "Action, Adventure, Sci-Fi", poster: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg" }
  ];
  
  document.addEventListener("DOMContentLoaded", function() {
    const movieList = document.getElementById("movieList");
  
    // Function to render movies on the page
    function renderMovies() {
      movieList.innerHTML = ""; // Clear existing content
  
      movies.forEach(movie => {
        // Create HTML elements for each movie
        const movieCard = document.createElement("div");
        movieCard.classList.add("col-md-4");
  
        movieCard.innerHTML = `
          <div class="card">
            <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
            <div class="card-body">
              <h5 class="card-title">${movie.title}</h5>
              <p class="card-text">${movie.genre}</p>
              <a href="#" class="btn btn-primary btn-block" data-movie-id="${movie.id}">Select Movie</a>
            </div>
          </div>
        `;
  
        // Add event listener for selecting a movie
        const selectBtn = movieCard.querySelector(".btn");
        selectBtn.addEventListener("click", function(event) {
          event.preventDefault();
          const selectedMovieId = parseInt(this.getAttribute("data-movie-id"));
          handleMovieSelection(selectedMovieId);
        });
  
        // Append movie card to movieList container
        movieList.appendChild(movieCard);
      });
    }
  
    // Function to handle movie selection
    function handleMovieSelection(movieId) {
      const selectedMovie = movies.find(movie => movie.id === movieId);
      if (selectedMovie) {
        // Here you can proceed with showing showtimes for the selected movie
        console.log("Selected Movie:", selectedMovie);
        // Example: You can call a function to show showtimes for this movie
        // showShowtimes(selectedMovie);
      } else {
        console.error("Movie not found");
      }
    }
  
    // Initial render of movies
    renderMovies();
  });
  