import React, { Component } from 'react';
import axios from 'axios'
import MovieInfo from '../movieInfo'


class Search extends Component {

    constructor( props ){
        super( props )
        this.state= {
            query: '',
            results: {},
            selectedMovie: [],
            currentMovie: ''
        }
    }

    changeDetail = (movieSelection) => {
        this.setState(
            {
            currentMovie: movieSelection
            },
            this.selectedFilter(movieSelection)
            )
        }

    selectedFilter = (name) =>{
        let movieSelection = this.state.results.filter((film) => name === film.title);
        this.setState({
          selectedMovie:movieSelection
        })
      }

    fetchSearchResults = ( query ) => {
        const searchUrl= `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_KEY_API_KEY}&language=en-US&page=1&query=${query}&include_adult=false`
        
        axios.get( searchUrl)
            .then( res => {
              const results = res.data.results;
                this.setState( {
                    results
                })
            })
    }

    handleOnInputChange = (e) => {
        const query = e.target.value
        if ( ! query ){
            this.setState( { query, results: {}} )
        } else{
          this.setState ( { query }, () =>{
            this.fetchSearchResults( query )
        } ) 
        }
    }

    renderSearchResults = () => {
        const { results } = this.state
        if ( Object.keys (results).length && results.length){
            return(
                <div className='results-container'>
                    {results.map( result => {
                        return(
                            <div key= { result.id } className="movie" onClick={() => this.changeDetail(result.title)}>
                                <p>{result.title}</p>
                               
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

    render(){
        console.log('current movie: ', this.state.currentMovie)
        console.log('selected Movie array: ', this.state.selectedMovie)
        console.log('results ', this.state.results)
      
        const { query } = this.state
        return (
            <div>
                <h3>Search For a Movie</h3>
                <label className="search" htmlFor="search-input">
                    <input 
                        type="text"  
                        value= {query}
                        placeholder='Search...'
                        onChange={this.handleOnInputChange}
                    />
                </label>
                <div className="content">
                   <div>{this.renderSearchResults()}</div>
                    <div className="currentMovie"><MovieInfo currentData={this.state.selectedMovie[0]} /></div> 
                </div>
                
            </div>
        )
    }
}

export default Search