import PropTypes from 'prop-types'

function Card({ title, cover, location }) {
    return (
        <article className="card">
            <img src={cover} alt={'Logement situé: ' + location} />
            <h2>{title}</h2>
        </article>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    cover: PropTypes.string,
    location: PropTypes.string,
}

export default Card
