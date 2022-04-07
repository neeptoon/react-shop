import {ShopContext} from "../context";
import BasketItem from "./BasketItem";
import {useContext} from "react";

export default function BasketList () {
	const {order, handleBasketShow} = useContext(ShopContext);

	const totalPrice = order.reduce((acc, item) => {
		return acc + item.price * item.quantity
	}, 0)

	return (
		<ul className="collection basket-list purple accent-4">
			<li className="collection-item active purple accent-4">Корзина <span className="secondary-content" onClick={handleBasketShow}>
				<i className="material-icons">close</i>
			</span></li>

			{ order.length ? order.map(good => <BasketItem key={good.id} {...good}/>) : <li className="collection-item">Корзина пуста</li>}

			<li className="collection-item active purple accent-4">общая стоимость: {totalPrice} &#8381;</li>
		</ul>
	)
}