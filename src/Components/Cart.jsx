export default function Cart({quantity}) {
	return (
		<div className="cart orange darken-3">
			<i className="material-icons">local_grocery_store</i>
			<span className="white-text">{quantity}</span>
		</div>
	)

}