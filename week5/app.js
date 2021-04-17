const store = require("./redux") 
const movies = require("./redux/movies")
const tvShows = require("./redux/tvShows")


store.dispatch(movies.getMovies())
store.dispatch(movies.deleteMovie('The Help'))
store.dispatch(movies.addMovie('The Help'))
store.dispatch(tvShows.getShows())
store.dispatch(tvShows.deleteTvShow('I Love Lucy'))

console.log(movies)
console.log(tvShows)