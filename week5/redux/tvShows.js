const addTvShow = title => {
    return {
        type: "ADD_TVSHOW",
        payload: title
    }
}

const deleteTvShow = title => {
    return {
        type: "DELETE_TVSHOW",
        payload: title
    }
}

const getShows = () => {
    return {
        type: "GET_SHOWS"
    }
}

const initialState = ["The Goldbergs", "The Golden Girls", "I Love Lucy"];

const tvShowReducer = (tvShows = initialState, action) => {
    switch(action.type) {
        case "ADD_TVSHOW":
            return [...tvShows, action.payload];
        case "DELETE_TVSHOW":
            return tvShows.filter(tvShow => tvShow !== action.payload);
        case "GET_SHOWS":
            return tvShows
        default:
            return tvShows;
    }
}

module.exports = { addTvShow, deleteTvShow, tvShowReducer, getShows }
