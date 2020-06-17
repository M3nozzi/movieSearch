import React, { Component } from 'react';


class MovieRow extends Component {

    viewMovie() {
               
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }


    render() {
        
      return <div className="divTable">
        <table className="table table-responsive" key={this.props.movie.id}> 
        <tbody>
          <tr>
            <td>
              <img className="poster" alt="poster movie"  src={this.props.movie.poster_src}/>
            </td>
            <td className="Info">
              <h3>{this.props.movie.title}</h3>
              <p>{this.props.movie.overview}</p>
              <button onClick={this.viewMovie.bind(this)}>View more</button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    
   }

}

export default MovieRow;
