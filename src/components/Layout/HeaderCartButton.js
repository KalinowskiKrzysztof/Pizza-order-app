import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'

const HeaderCartButton = props => {
const cartCtx = useContext(CartContext);
// transforming an array of data into a single value - single number 
const numberOfCartItems = cartCtx.items.reduce((currentNumber, item ) => {
	return currentNumber + item.amount
}, 0)


	return (
		<button className='Header-Cart-Button' onClick={props.onClick}>
			<span>
            <FontAwesomeIcon icon={faCartShopping} />
            </span>

			<span className='badge'>{numberOfCartItems}</span>
		</button>
	)
}

export default HeaderCartButton
