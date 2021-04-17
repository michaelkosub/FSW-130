const redux = require('redux');
const {combineReducers, createStore} = redux;
const {movieReducer} = require('./movies.js');
const {tvShowReducer} = require('./tvShows.js');


const rootReducer = combineReducers({
    movies: movieReducer,
    tvShows: tvShowReducer
});

const store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState());
});

module.exports = store;
