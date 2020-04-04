import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Button from "./component/button";
import Movie from "./component/movie";
import MovieInfo from "./component/movieInfo"
import Search from "./pages/search/search"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "now_playing",
      movie: [],
      currentDetail: "",
      currentMovie: []
    };
  }

  changeCategory = selection => {
    this.setState(
      {
        category: selection
      },
      this.fetchData()
    );
  };

  changeDetail = (movieSelection) => {
    this.setState(
      {
        currentDetail: movieSelection
      },
      this.movieFilter(movieSelection)
    )
  }

  componentDidMount = () => {
    this.fetchData();
  };

  fetchData = () => {
    const url = `https://api.themoviedb.org/3/movie/${this.state.category}?api_key=${process.env.REACT_APP_KEY_API_KEY}&language=en-US&page=1`;
    axios
      .get(url)
      .then(res => {
        this.setState({ movie: res.data.results });
      })
      .catch(error => {
        return error;
      });
  };

  movieFilter = (name) =>{
    let movieSelection = this.state.movie.filter((film) => name === film.title);
    this.setState({
      currentMovie:movieSelection
    })
  }

  

  render() {
    console.log('current movie: ', this.state.currentMovie)
    console.log('currentDetail: ', this.state.currentDetail)
    console.log('movie: ', this.state.movie)
    const headings = [
      { buttonText: "Now Playing", urlText: "now_playing" },
      { buttonText: "Top Rated", urlText: "top_rated" },
      { buttonText: "Most Popular", urlText: "popular" }
    ];

    const categories = headings.map((category, i) => {
      return (
        <Button movieCategory={category} key={i} change={this.changeCategory} />
      );
    });

    const movieList = this.state.movie.map((movieDetails, i) => {
      return <Movie film={movieDetails} key={i} details={this.changeDetail} />;
    });



    return (
      <div className="App">
        <div>{categories}</div>
        <div><Search /></div>
        <div>{movieList}</div>
       <MovieInfo currentData={this.state.currentMovie[0]} />
     
      </div>
    );
  }
}

export default App;
