import { useEffect, useState } from "react";
import {useParams, Link} from "react-router-dom"
import styles from "./Detail.module.css"

function Detail(){
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie); 
    setLoading(false);
  }

  useEffect(()=>{getMovie();},[]);
  console.log("this is");
  console.log(movie);
  console.log("movie");
  console.log(loading);
  return(
  <div className={styles.container}>
    {loading === true ? (<div><h1 className={styles.loader}>Loading...</h1></div>) : (<div className={styles.detail}>
      <Link to="/">
      <button>Home</button>
      </Link>
      
      <img src={movie.large_cover_image} alt={movie.title} className={styles.movie__img}/>
      <h2>{movie.title_long}</h2>
      <p>{movie.description_full}</p>
    </div>)}
  </div>)
}

export default Detail;