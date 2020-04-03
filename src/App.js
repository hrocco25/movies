import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Button from "./component/button";
import Movie from "./component/movie";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "now_playing",
      movie: []
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

  render() {
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
      return <Movie film={movieDetails} key={i} />;
    });

    return (
      <div className="App">
        {categories}

        <div>{movieList}</div>
      </div>
    );
  }
}

export default App;
