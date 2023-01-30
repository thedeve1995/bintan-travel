import './Packages-card.css';
import { useStateValue } from './StateProvider'

function PackagesCard({ src, trip, rating, subtrip, type, price, location, pax }){
    const [{ basket }, dispatch] = useStateValue();
    
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                src: src,
                trip: trip,
                subtrip: subtrip,
                rating: rating,
                type: type,
                price: price,
                location: location,
                pax: pax    
            },
        });
    };

    return (
        <div className='packages-card'>
            <img  
                src={src}
            />
  
            <h3>
                {trip}
            </h3>
            <h4>
                {subtrip}
            </h4>

            <p>{type}</p>
            <p>{rating}</p>
            <p>{location}</p>
            <p>{pax}</p>

            <div className='pricing'>
                <div className='amount'>
                    <p>Price :</p>
                    <h4 className='price'>SGD{price}/pax</h4>
                </div>
                <button onClick={addToBasket}>
                    Cart
                </button>
            </div>
        </div>
    )
}

export default PackagesCard;