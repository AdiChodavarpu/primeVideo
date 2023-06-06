import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'



const MoviesSlider = props => {
  const {moviesLists} = props
  const actionMovies = moviesLists.filter(eachitem =>
    eachitem.categoryId === 'ACTION' ? eachitem : null,
  )

  const comedyMovies = moviesLists.filter(eachitem =>
    eachitem.categoryId === 'COMEDY' ? eachitem : null,
  )

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div>
      <h1 className="action">Action Movies</h1>

      <Slider {...settings}>
        {actionMovies.map(eachitem => (
          <MovieItem key={eachitem.id} ActionMovies={eachitem} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
