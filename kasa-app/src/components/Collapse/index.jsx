import PropTypes from 'prop-types'
import { useState } from 'react'
import arrow_up from '../../assets/arrow_up.png'
import arrow_down from '../../assets/arrow_down.png'

function Collapse({ title, description }) {
    const [isOpen, setIsOpen] = useState(false)
    return !isOpen ? (
        <article className="collapse">
            <button
                className="collapse collapse__button collapse__button--open"
                onClick={() => setIsOpen(true)}
            >
                <h2>{title}</h2>
                <img src={arrow_down} alt="Flèche vers le bas" />
            </button>
        </article>
    ) : (
        <article className="collapse">
            <button
                className="collapse collapse__button collapse__button--close"
                onClick={() => setIsOpen(false)}
            >
                <h2>{title}</h2>
                <img src={arrow_up} alt="Flèche vers le haut" />
            </button>
            <div className="collapse collapse__description">{description}</div>
        </article>
    )
}

Collapse.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}

export default Collapse
