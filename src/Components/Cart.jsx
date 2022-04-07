import {ShopContext} from '../context.js'
import {useContext} from 'react'

export default function Cart() {
	const {order, handleBasketShow} = useContext(ShopContext)

	const quantity = order.length;

	return (
		<div className="cart orange darken-3" onClick={handleBasketShow}>
			<i className="material-icons">local_grocery_store</i>
			{quantity ? <span className="white-text">{quantity}</span> : null}
		</div>
	)

}