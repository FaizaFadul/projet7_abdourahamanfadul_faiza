//TO-DO Changer les alt

import PropTypes from 'prop-types'
import { useState } from 'react'
import arrow_left from '../../assets/arrow_left.png'
import arrow_right from '../../assets/arrow_right.png'

function Slideshow({ pictures }) {
    let [picIndex, setIndex] = useState(0)

    if (pictures.length > 1) {
        return (
            <section className="slideshow">
                <button
                    className="arrow arrow--left"
                    onClick={() => {
                        picIndex > 0
                            ? setIndex(picIndex - 1)
                            : setIndex(pictures.length - 1)
                    }}
                >
                    <img src={arrow_left} alt="Flèche vers la gauche" />
                </button>
                <img
                    className="slideshow__picture"
                    src={pictures[picIndex]}
                    alt={'Logement situé: '}
                />
                <div className="counter">
                    {picIndex + 1}/{pictures.length}
                </div>
                <button
                    className="arrow arrow--right"
                    onClick={() => {
                        picIndex === pictures.length - 1
                            ? setIndex(0)
                            : setIndex(picIndex + 1)
                    }}
                >
                    <img src={arrow_right} alt="Flèche vers la droite" />
                </button>
            </section>
        )
    } else {
        return (
            <section className="slideshow">
                {' '}
                <img
                    className="slideshow__picture"
                    src={pictures[picIndex]}
                    alt={'Logement situé: '}
                />
                <div className="counter"></div>{' '}
            </section>
        )
    }
}

Slideshow.propTypes = {
    pictures: PropTypes.string,
}

export default Slideshow
