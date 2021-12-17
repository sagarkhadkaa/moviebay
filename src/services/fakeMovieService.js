import * as genresAPI from "./fakeGenreServices";
const movies = [
    {
        _id: "5b21ca3eeb7f6fbccd471815",
        title: "KGF: Chapter 1",
        genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
        numberInStock: 6,
        dailyRentalRate: 3.5,
        publishDate: "2018-01-03T19:04:28.809Z",
    },
    {
        _id: "5b21ca3eeb7f6fbccd471816",
        title: "War",
        genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
        numberInStock: 5,
        dailyRentalRate: 2.5,
        liked: true,
    },
    {
        _id: "5b21ca3eeb7f6fbccd471817",
        title: "Badla",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
        numberInStock: 8,
        dailyRentalRate: 3.5,
    },
    {
        _id: "5b21ca3eeb7f6fbccd471819",
        title: "Phir hera pheri",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 7,
        dailyRentalRate: 4.5,
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181a",
        title: "Golmal",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 7,
        dailyRentalRate: 3.5,
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181b",
        title: "Welcome",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 7,
        dailyRentalRate: 3.5,
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181e",
        title: "Drishyam",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
        numberInStock: 7,
        dailyRentalRate: 4.5,
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181f",
        title: "Andhadhun",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
        numberInStock: 4,
        dailyRentalRate: 4.5,
    },
    {
        _id: "5b21ca3eeb7f6fbccd471821",
        title: "Singham",
        genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
        numberInStock: 7,
        dailyRentalRate: 3.0,
    },
];

export function getMovies() {
    return movies;
}

export function getMovie(id) {
    return movies.find((m) => m._id === id);
}

export function saveMovie(movie) {
    let movieInDb = movies.find((m) => m._id === movie._id) || {};
    movieInDb.name = movie.name;
    movieInDb.genre = genresAPI.genres.find((g) => g._id === movie.genreId);
    movieInDb.numberInStock = movie.numberInStock;
    movieInDb.dailyRentalRate = movie.dailyRentalRate;

    if (!movieInDb._id) {
        movieInDb._id = Date.now();
        movies.push(movieInDb);
    }

    return movieInDb;
}

export function deleteMovie(id) {
    let movieInDb = movies.find((m) => m._id === id);
    movies.splice(movies.indexOf(movieInDb), 1);
    return movieInDb;
}
