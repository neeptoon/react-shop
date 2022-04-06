export default function Cart({quantity, handleBasketShow}) {
	return (
		<div className="cart orange darken-3" onClick={handleBasketShow}>
			<i className="material-icons">local_grocery_store</i>
			{quantity ? <span className="white-text">{quantity}</span> : null}
		</div>
	)

}