export default function BasketItem({id, name, price, quantity}) {
	return (
		<li className="collection-item">
			{name} x {quantity} шт = {price * quantity} &#8381;
			<span className="secondary-content">
				<i className="material-icons">close</i>
			</span>
		</li>
	)
}