import Card from '../../components/Card'
import logements from '../../assets/logements.json'
import Banner from '../../components/Banner'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <section>
            <Banner title="Chez vous, partout et ailleurs" page="home" />
            <ul className="card__list">
                {logements.map(({ id, title, cover, location }) => (
                    <Link
                        to={'/logement/' + id}
                        className="card__container"
                        key={id}
                    >
                        <Card title={title} cover={cover} location={location} />
                    </Link>
                ))}
            </ul>
        </section>
    )
}

export default Home
