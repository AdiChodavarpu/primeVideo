import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  return (
    <div className="PrimeVideo-Section">
      <img
        className="prime-Img"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="PrimeVideo-Container">
        <MoviesSlider moviesLists={moviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
