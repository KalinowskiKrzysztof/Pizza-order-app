// Create a Card component with the children attribute that passes it directly to the rendered structure

const Card = props => {
	return (
	<div className='card'>{props.children}</div>
    )
}
export default Card
