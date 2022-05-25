import { Fragment } from 'react'
// creating a Header section
const Header = props => {
	return (
		<Fragment>
			<header className='{classes.header}'>
				<h1>VaffaNapoli</h1>
				<button>Cart</button>
			</header>
			<div className="{classes['main-image']}"></div>
		</Fragment>
	)
}

export default Header
