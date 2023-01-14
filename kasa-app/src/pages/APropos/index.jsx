import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import apropos from '../../assets/apropos.json'

function APropos() {
    return (
        <section>
            <Banner page="apropos" />
            <ul className="collapse__list">
                {apropos.map(({ id, title, description }) => (
                    <div className="collapse__container" key={id}>
                        <Collapse title={title} description={description} />
                    </div>
                ))}
            </ul>
        </section>
    )
}

export default APropos
