const addMovie = title => {
    return {
        type: "ADD_MOVIE",
        payload: title
    }
}

const deleteMovie = title => {
    return {
        type: "DELETE_MOVIE",
        payload: title
    }
}

const getMovies = () => {
    return {
        type: "GET_MOVIES"
    }
}

const initialState = ["8 Seconds", "The Help", "Girls Trip"];

const movieReducer = (movies = initialState, action) => {
    switch(action.type) {
        case "ADD_MOVIE":
            return [...movies, action.payload];
        case "DELETE_MOVIE":
            return movies.filter(movie => movie !== action.payload);
        case "GET_MOVIES":
            return movies;
        default:
            return movies;
    }
}

module.exports = { addMovie, deleteMovie, movieReducer, getMovies }