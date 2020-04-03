import React, { Component } from 'react';
import axios from "axios"
import "./playing.css"
import { Link } from 'react-router-dom'

class Playing extends Component {
    constructor(props) {
        super(props);
        this.state= {
            movie:[],
            details: false,
        }
    }

    componentDidMount() {
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_KEY_API_KEY}&language=en-US&page=1`;
        axios
          .get(url)
          .then(res => {
            const movie = res.data.results;
              this.setState({ movie });
              console.log(this.state.movie)
          })
        }

      // titles = () => {        
      //   {this.state.movie.map(data => {
      //     return(
      //       <div key={data.title}>
      //         <h1>{data.title}</h1>
      //       </div>
      //     )
      //   })}
      // }

      details =() =>{
        //click returns more information 
        console.log("click")
        return(
          <div>
            <p>test</p>
          </div>
        )
      }
       

    render(){
       
        return (
            
            <div className='playing'> 
                <h2>Now Playing Movies</h2>
                <div onClick={this.details}>{this.state.movie.map(data => 
                    <h3>{data.title}</h3>
                )}</div>
               

            </div>
        )
    }
}

export default Playing