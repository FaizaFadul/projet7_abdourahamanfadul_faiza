import PropTypes from 'prop-types'

function Host({ host }) {
    return (
        <aside className="host">
            <h3>{host.name}</h3>
            <img src={host.picture} alt="Propriétaire du logement" />
        </aside>
    )
}

Host.propTypes = {
    name: PropTypes.string,
    picture: PropTypes.string,
}

export default Host
