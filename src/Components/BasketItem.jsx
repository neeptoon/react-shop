export default function BasketItem({id, name, price, quantity, removeFromBasket, changeQuantity}) {

	if  (quantity < 1) {
		removeFromBasket(id)
	}

	return (
		<li className="collection-item" onClick={(evt) => changeQuantity(evt, id)}>
			{name}
			<i id="increase" className="material-icons basket-quantity">add</i> x {quantity}
			<i id="decrease" className="material-icons basket-quantity decrease">remove</i>
			                                                                    шт = {price * quantity} &#8381;
			<span className="secondary-content" onClick={(evt) => {
				evt.stopPropagation();
				removeFromBasket(id)
			}}>
				<i className="material-icons">close</i>
			</span>
		</li>
	)
}