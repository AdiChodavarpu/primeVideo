// Write your code here
import './index.css'

const MovieItem = props => {
  const {ActionMovies} = props
  const {thumbnailUrl, videoUrl} = ActionMovies

  return (
    <div>
      <img src={thumbnailUrl} alt="thumbnail" />
    </div>
  )
}

export default MovieItem
