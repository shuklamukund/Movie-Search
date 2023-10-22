document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", searchMovie);
    

});

function searchMovie() {
    const searchInput = document.getElementById("searchInput").value;
   if (searchInput.trim() === "") {
       return;
    }
    
    const apiKey = "2e7a616b";
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(searchInput)}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayMovieDetails(data);
        })
        .catch(error => {
            console.error("Error fetching movie data:", error);
        });
}

function displayMovieDetails(movieData) {
    const movieDetailsDiv = document.getElementById("movieDetails");
    movieDetailsDiv.innerHTML = `
        <h2>${movieData.Title}</h2>
        <img src="${movieData.Poster}" alt="Movie Poster">
        <p><strong>Year:</strong> ${movieData.Year}</p>
        <p><strong>Genre:</strong> ${movieData.Genre}</p>
        <p><strong>Director:</strong> ${movieData.Director}</p>
        <p><strong>Plot:</strong> ${movieData.Plot}</p>
    `;
}
