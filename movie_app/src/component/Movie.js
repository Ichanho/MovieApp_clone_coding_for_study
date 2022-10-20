import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import styles from "./Movie.module.css"


function Movie({id, medium_cover_image, title, summary, genres}){
  return (
    <div className={styles.movie}>
      <img src={medium_cover_image} alt={title} className={styles.movie__img}/>
      <h2 className={styles.movie__title}>
        <Link to={`/movie/${id}`}>{title}</Link>  
      </h2>
      <p>{summary.length > 200 ? `${summary.slice(0,200)} ...`: summary}</p>
      <ul className={styles.movie__genres}>
        {genres.map((genre) =>
        (<li key={genre}>ㆍ{genre}</li>
        ))}
      </ul>
    </div>
  )
}

Movie.prototype ={
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie