import './Packages-card.css';
import { useStateValue } from './StateProvider'

function PackagesCard(props){
    const [{ basket }, dispatch] = useStateValue();
    
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                
                
            },
        });
    };

    return (
        <div className='packages-card'>
            <img  
                src={props.src}
            />
  
            <h3>
                {props.trip}
            </h3>
            <h4>
                {props.subtrip}
            </h4>

            <p>{props.type}</p>
            <p>{props.rating}</p>
            <p>{props.location}</p>
            <p>{props.pax}</p>

            <div className='pricing'>
                <div className='amount'>
                    <p>Price :</p>
                    <h4 className='price'>{props.price}</h4>
                </div>
                <button onClick={addToBasket}>
                    Cart
                </button>
            </div>
        </div>
    )
}

export default PackagesCard;