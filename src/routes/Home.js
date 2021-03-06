import React from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";
/*
class Home extends React.Component {
  state = {
    movies: []
  };
  constructor(props) {
    super(props);
    this.state.isLoading = true;
  };
  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    console.log(movies);
    this.setState({ movies: movies, isLoading: false });
  }
  componentDidMount() {
    this.getMovies();
  };
  render() {
    const { isLoading, movies } = this.state;
    return <section className="container">
      {isLoading ? <div className="loader">
        <span className="loader_text">Loading...</span>
      </div> :
        <div className="movies">
          { movies.map(movie =>
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
              /> )         //항상 map으로 부터 뭔가를 return해야한다.
          }
      </div>
      }
    </section>
  };
}*/

class Home extends React.Component {
  state = {
    movies: []
  };
  constructor(props) {
    super(props);
    this.state.isLoading = true;
  };
  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    console.log(movies);
    this.setState({ movies: movies, isLoading: false });
  }
  componentDidMount() {
    this.getMovies();
  };
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div className="same">
      <div className="Main">
          Main
        </div>
      <div className="Explanation">
        Explanation
        </div>
      <div className="AboutTeam">
        AboutTeam
        </div>
      <div className="QnA">
       QnA
        </div>
      </div>
      )
  };
}


export default Home;
