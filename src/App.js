import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./component/header/header"
import Footer from "./component/footer/footer"
import Main from "./pages/main/main"
import Search from "./pages/search/search"
import Playing from "./pages/playing/playing"
import Popular from "./pages/popular/popular"
import Rated from "./pages/rated/rated"

console.log(process.env.REACT_APP_KEY_API_KEY)

class App extends Component {

  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" render={(props) => <Main />} />
          <Route exact path="/search"render={(props) => <Search />} />
          <Route exact path="/playing"render={(props) => <Playing />} />
          <Route exact path="/popular"render={(props) => <Popular />} />
          <Route exact path="/rated"render={(props) => <Rated />} />
        </Switch>
      
        <Footer />
    
      </div>
    );
  }
}

export default App;
