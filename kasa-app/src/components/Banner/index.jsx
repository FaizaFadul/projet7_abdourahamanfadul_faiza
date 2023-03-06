import PropTypes from 'prop-types';

function Banner({ title, page }) {
    return (
        <section className={'banner banner--' + page}>
            <h1>{title}</h1>
        </section>
    );
}

Banner.propTypes = {
    title: PropTypes.string,
    page: PropTypes.string,
};

export default Banner;
