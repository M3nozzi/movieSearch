import React, {Component} from 'react';
import MovieRow from '../component/MovieRow';
import $ from 'jquery';
import style from '../styles/Search.scss';

class Search extends Component { 

    constructor(props) {
      super(props)
  
      this.state = {}
      this.performSearch("")
  
    }
    
    
    performSearch(searchTerm){
      const urlDefault = "http://api.themoviedb.org/3/movie/popular?api_key=991f4c7dbfe4a96a1941e4bc830a7387&language=en-US"
      let urlString = `http://api.themoviedb.org/3/search/movie?api_key=991f4c7dbfe4a96a1941e4bc830a7387&query=` + searchTerm
      
      if (searchTerm === "") {
        urlString = urlDefault
      }
      
  
      $.ajax({
        url: urlString,
        success: (searchResults) => {
          console.log("Fetched data successfully") 
  console.log(searchResults.results)
          const results = searchResults.results
          let movieRows = []
  
          results.forEach((movie) => {
  
            movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
           
              const movieRow = <MovieRow key={movie.id} movie={movie} />
              
              if (movie.poster_path !== null) {
                
                movieRows.push(movieRow)
              } 

          
          })
          this.setState({rows:movieRows})
        },
        error: (xhr, status, err) => {
          console.log("Failed to fetch")
        }
      })
    }
  
    searchChangeHandler(event) {
      console.log(event.target.value)
      const boundObject = this
      const searchTerm = event.target.value
     boundObject.performSearch(searchTerm)
    }
  
    render() {
      return (
          <div>
            
              <input   onChange={this.searchChangeHandler.bind(this)} placeholder="Search a movie" />
             
              {this.state.rows}
     </div>
    )
  }
    
}




export default Search;
