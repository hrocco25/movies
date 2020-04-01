import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import "./popular.css"

class Popular extends Component {
    constructor() {
        super();
        this.state= {
            title: []
        }
    }

    componentDidMount(){
        fetch('')
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