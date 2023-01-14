import star_empty from '../../assets/star_empty.png'
import star_full from '../../assets/star_full.png'

function Rating({ rating }) {
    const fullValue = Array.from(Array(Number(rating)).keys())
    const emptyrating = 5 - Number(rating)
    const emptyValue = Array.from(Array(Number(emptyrating)).keys())
    return (
        <div className="rating">
            {fullValue.map((fullstars) => (
                <span key={fullstars.toString()}>
                    <img src={star_full} alt="" />
                </span>
            ))}
            {emptyValue.map((emptystars) => (
                <span key={emptystars.toString()}>
                    <img src={star_empty} alt="" />
                </span>
            ))}
        </div>
    )
}

export default Rating
