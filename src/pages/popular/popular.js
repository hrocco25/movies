import React, { Component } from 'react';
import axios from "axios"
import "./popular.css"






class Popular extends Component {
    constructor() {
        super();
        this.state= {
            movie: {}
        }
    }

    // key = process.env.REACT_APP_KEY_API_KEY
    componentDidMount() {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY_API_KEY}&language=en-US&page=1`;
        axios
          .get(url)
          .then(res => {
            const movie = res.data.results;
              this.setState({ movie });
              console.log(this.state.movie)
          })
        }
       

    render(){
        
       
       
        return (
            
            <div className='popular'>
                <h1>popular results </h1>
                

            </div>
        )
    }
}

export default Popular