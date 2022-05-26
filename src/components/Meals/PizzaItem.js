import { useContext } from 'react'
import MealItemForm from './PizzaItemForm'
import CartContext from '../../store/cart-context'
//Creating a component that describes one pizza on the menu
const PizzaItem = props => {
	const cartCtx = useContext(CartContext)
	//Create a const that shows the price with two decimal places using toFixed
	const price = `$${props.price.toFixed(2)}`


	const addToCartHandler = (amount) => {
		cartCtx.addItem({
		  id: props.id,
		  name: props.name,
		  amount: amount,
		  price: props.price,
		});
	  };
	
	return (
		<li className='meal'>
			<div>
				<h3>{props.name}</h3>
				<div className='description'>{props.description}</div>
				<div className='price'>{price}</div>
				<div className='pizzas-img'>{props.photo}</div>
			</div>
			<div>
			<MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
	)
}

export default PizzaItem
