import Card from '../UI/Card'
import PizzaItem from './PizzaItem'
import imgofMargherita from '../images/Margherita.jpg'
import imgofQuattroStagioni from '../images/QuattroStagioni.jpg'
import imgofDiavola from '../images/Diavola.jpg'
import imgofParmigiana from '../images/Parmigana.jpg'

const PizzasWithDescription = [
	{
		id: 'm1',
		name: 'Margherita',
		description: 'Mozzarella, tomato sauce, fresh basil',
		price: 15.99,
		photo: <img className='pizzas-img' src={imgofMargherita} alt='Pizza Margherita'></img>,
	},
	{
		id: 'm2',
		name: 'Quattro Stagioni',
		description: 'Tomato sauce, mozzarella, mushrooms, ham, artichokes, olives, oregano',
		price: 16.5,
		photo: <img className='pizzas-img' src={imgofQuattroStagioni} alt='Pizza Quattro Stagioni'></img>,
	},
	{
		id: 'm3',
		name: 'Diavola',
		description: 'Tomato sauce, mozarella, spicy salami, chilli',
		price: 12.99,
		photo: <img className='pizzas-img' src={imgofDiavola} alt='Pizza Diavola'></img>,
	},

	{
		id: 'm4',
		name: 'Parmigiana',
		description: 'Tomato sauce, mozzarella,olives, parmesan flakes',
		price: 18.99,
		photo: <img className='pizzas-img' src={imgofParmigiana} alt='Pizza Parmigiana'></img>,
	},
]

const PizzaMenu = () => {
	const PizzasList = PizzasWithDescription.map(meal => (
		<PizzaItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} photo={meal.photo}/>
	))

	return (
		<section className='meals'>
			<Card>
				<ul>{PizzasList}</ul>
			</Card>
		</section>
	)
}

export default PizzaMenu
