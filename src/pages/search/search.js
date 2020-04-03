import React, { Component } from 'react';
import axios from 'axios'
import './search.css';


class Search extends Component {

    constructor( props ){
        super( props )
        this.state= {
            query: '',
            results: {},
        }
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
                            <div key= { result.id } className="result-item" style={{border: "black solid .1em"}}>
                                <a className='title' href= { result.title } target="_blank" rel="noopener noreferrer">{result.name}</a>
                                <p>{result.title}</p>
                               
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

    render(){
        const { query } = this.state
        return (
            <div className="container">
                <label className="search-label" htmlFor="search-input">
                    <input 
                        className='search-input'
                        type="text"
                        name= "query"
                        value= {query}
                        id="search-input"
                        placeholder='Search...'
                        onChange={this.handleOnInputChange}
                    />
                </label>
                {this.renderSearchResults()}
            </div>
        )
    }
}

export default Search