const movies = [
{name: "Your Name", durationInMinutes: 130},
{name: "Pesadilla antes de navidad", durationInMinutes: 225}, 
{name: "Origen", durationInMinutes: 165}, 
{name: "El señor de los anillos", durationInMinutes: 967}, 
{name: "Solo en casa", durationInMinutes: 214}, 
{name: "El jardin de las palabras", durationInMinutes: 40}
];

// Creo arrays vacíos para cada categoría de duración
const smallMovies = [];
const mediumMovies = [];
const largeMovies = [];


for (let i = 0; i < movies.length; i++) {
  const movie = movies[i];
  
  if (movie.durationInMinutes < 100) {// Verifico la duración de la película y lo clasifico
    smallMovies.push(movie);
  } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
    mediumMovies.push(movie);
  } else {
    largeMovies.push(movie);
  }
}

console.log(smallMovies);
console.log(mediumMovies);
console.log(largeMovies);