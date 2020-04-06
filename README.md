# Movie Guide Overview


## Project Description

The Movie Guide is a single page application that uses a MovieDB API to search for movies, list all of the top-rated, popular, and now playing.  Users can choose a movie and learn more about the movie.  


## Project Links

- [repo](https://github.com/hrocco25/movies)
- [deployment](https://movie-guide.netlify.com/)
- [API](https://developers.themoviedb.org/3/search/search-movies)



## Wireframes

<img src="https://user-images.githubusercontent.com/49919405/78611913-3c5be580-7825-11ea-92bb-702990c1d497.jpg" height='200' width='200'>

<img src="https://user-images.githubusercontent.com/49919405/78611747-de2f0280-7824-11ea-8554-800547ef3965.jpg" height='200' width='200'>


#### MVP
- Now playing
- Popular
- Top rated
- Search
- Movie details

#### PostMVP

- Save favorite movies 
- Add pagination 
- Add more testing
- Add move CSS for styling
- Mobile friendly 

## Components

| Component | Description | 
| --- | :---: |  
| App | Create State and fetch data with Axios.  It will render Header, Button, Movie, MovieInfo, and Search.  | 
| Header | This will render the header with the title of the site | 
| Search | This includes the Axios call for Search API.  It will search through the API and display results and the MovieInfo.| 
| Button | This will display all of the categories and make them clickable. | 
| Movie | Display all of the movies titles and have them be clickable to display MovieInfo | 
| MovieInfo | Displays all of the movie details.  | 

## Questions to keep in mind

- What design patterns did you use?
    - I used a function for axios that would change where the URL would go depending on state. 
- How would you test your application?
    - I tested my app with Jest by adding test files to check for certain criteria to be on a certain page.  Also, I tested the app on several browsers and had users test the site.  
- How do you manage/store application state?
    - I managed state in app.js and and search.js.  I did this because that is where I did my axios call.  I updated state with functions depending on what the user clicked on the app. I passed down props to certain components with state information as well.    
- What ways could you structure the code to make it easy to understand maintain?
    - I could remove the axios call and state from search.js.  This would make it easier to maintain in the future and improve the level of readability for another engineer.
- What other considerations and tradeoffs did you make when building the application?
    - I focused more on getting the app to work the way I wanted versus spending time on the design and layout of the app.  I plan to add more styling to the app in the future.   


## Code Snippet

```
movieFilter = name => {
    let movieSelection = this.state.movie.filter(film => name === film.title);
    this.setState({
      currentMovie: movieSelection
    });
  };

  //filters out the current movie the user choose to set the state so the user can see more information about the movie
	
```


## Issues and Resolutions


#### 
**ERROR**: Failed to load resource: the server responded with a status of 401 ()

**RESOLUTION**: Needed to add key to netlify 

