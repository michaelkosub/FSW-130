import React from "react";

const {Provider, Consumer} = React.createContext();

class MovieContextProvider extends React.Component {
    state ={
        movies: [
            
            "Maleficent: Mistress of Evil",
            "8 Seconds",
            "Sonic the Hedgehog",
            "Birds of Prey",
            "Wonder Woman",
            
        ],
        newMovie: ""
    }

    handleChange = (e) => {
        e.preventDefault();

        this.setState({
            newMovie: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();

        this.setState({
            movies: this.state.movies.concat(this.state.newMovie)
        }, () => this.setState({newMovie: ""})
        )
    }

    render() {
        return(
            <Provider value={{movies: this.state.movies, newMovie: this.state.newMovie, handleClick: this.handleClick, handleChange: this.handleChange}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {MovieContextProvider, Consumer as MovieContextConsumer};