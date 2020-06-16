import React, {Component} from 'react';
import './App.css';

class App extends Component { 

  constructor(props) {
    super(props)
    console.log("this is my initializer")

    const movies = [
      { id: 0, poster_src:"https://res.cloudinary.com/menozzi/image/upload/v1591803649/xuza41ulap4dblwxkob1.jpg", title: "Avengers: Infinity War", overview:"msksksksksks" },
      {id: 1, poster_src:"https://res.cloudinary.com/menozzi/image/upload/v1591803649/xuza41ulap4dblwxkob1.jpg", title: "The Avengers", overview:"My second overview"}
    ]


    var movieRows = []
    movies.forEach((movie) => {
      console.log(movie.title)
      const movieRow = <table key={movie.id}>
        <tbody>
          <tr>
            <td>
              <img alt="poster movie" width="100" src={movie.poster_src}/>
            </td>
            <td>
              {movie.title}
              <p>{movie.overview}</p>
            </td>
          </tr>
        </tbody>
      </table>
      movieRows.push(movieRow)
      // movieRows.push(<p key={movie.id}>movie title: {movie.title}</p>)
    })

    this.state  = {rows: movieRows}

}

  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img width="50" src="movie.svg" alt="Icon movies, popcorn and 3d glasses"/>
              </td>
              <td>
                <h1>Movies Search</h1>
              </td>
            </tr>
          </tbody>
       </table>
        
        <input style={{
          fontSize: 24,
          display: 'block',
          width: '98.5%',
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft:16
,        }} placeholder="Enter search term"/>

        {this.state.rows}

      </div>
    )
  }
}




export default App;
