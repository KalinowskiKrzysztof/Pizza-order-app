import { useContext } from 'react';
import Modal from "../UI/Modal"
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';


const Cart = (props) => {
	// call useContext and pass CartContext to get an access to that cartContext
	const cartCtx = useContext(CartContext);
  
	
	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

	// checking if CartContext items has a length greater than 0
	const hasItems = cartCtx.items.length > 0;
  
	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};
  
	const cartItemAddHandler = (item) => {
		cartCtx.addItem({...item, amount: 1})
	};
  
	const cartItems = (
	  <ul className='cart-items'>
		  {/* transform items to items in the cart */}
		{cartCtx.items.map((item) => (
		  <CartItem
			key={item.id}
			name={item.name}
			amount={item.amount}
			price={item.price}
			onRemove={cartItemRemoveHandler.bind(null, item.id)}
			onAdd={cartItemAddHandler.bind(null, item)}
		  />
		))}
	  </ul>
	);
  
	return (
	  <Modal onClose={props.onClose}>
		{cartItems}
		<div className='total'>
		  <span>Total Amount</span>

		  <span>{totalAmount}</span>
		</div>
		<div className='actions'>
		  <button className='button--alt' onClick={props.onClose}>
			Close
		  </button>
		  {/* Using hasItems  to check if hasItems is true and only then rendered a button */}
		  {hasItems && <button className='button'>Order</button>}
		</div>
	  </Modal>
	);
  };
  
  export default Cart;