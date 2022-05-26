import { Fragment } from 'react'
import HeaderCartButton from './HeaderCartButton'
import Pizzaimg from '../../components/images/HeaderImgPizza.jpg'
// creating a Header section
const Header = props => {
	return (
		<Fragment>
			<header className='header'>
				<h1>VaffaNapoli</h1>
				<HeaderCartButton onClick={props.onShowCart} />
			</header>

			<div className='main-image'>
		
				<img src={Pizzaimg} alt='Pizza'>
				</img>
			</div>
		</Fragment>
	)
}

export default Header
