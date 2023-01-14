import PropTypes from 'prop-types'

function Tags({ tags }) {
    return (
        <ul className="tags__list">
            {tags.map((tag) => (
                <li className="tags">{tag}</li>
            ))}
        </ul>
    )
}

Tags.propTypes = {
    tags: PropTypes.string,
}

export default Tags
