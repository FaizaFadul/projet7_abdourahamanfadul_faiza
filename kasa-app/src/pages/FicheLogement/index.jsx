import Slideshow from '../../components/Slideshow'
import Tags from '../../components/Tags'
import Host from '../../components/Host'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'
import logements from '../../assets/logements.json'
import { useParams } from 'react-router-dom'

function FicheLogement() {
    const { id } = useParams()
    const equipments = logements.find((obj) => obj.id === id).equipments

    return (
        <section className="fichelogement">
            <Slideshow
                pictures={logements.find((obj) => obj.id === id).pictures}
            />
            <section className="fichelogement__infos">
                <div className="titletags">
                    <h1>{logements.find((obj) => obj.id === id).title}</h1>
                    <h2>{logements.find((obj) => obj.id === id).location}</h2>
                    <Tags tags={logements.find((obj) => obj.id === id).tags} />
                </div>
                <div className="hostrating">
                    <Host host={logements.find((obj) => obj.id === id).host} />
                    <Rating
                        rating={logements.find((obj) => obj.id === id).rating}
                    />
                </div>
            </section>
            <section className="fichelogement__description">
                <Collapse
                    title="Description"
                    description={
                        logements.find((obj) => obj.id === id).description
                    }
                />
                <Collapse
                    title="Équipements"
                    description={
                        <ul className="equipment_list">
                            {equipments.map((tag) => (
                                <li>{tag}</li>
                            ))}
                        </ul>
                    }
                />
            </section>
        </section>
    )
}

export default FicheLogement
