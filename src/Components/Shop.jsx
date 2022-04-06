import React, {useEffect, useState} from "react";
import {API_KEY, API_URL} from '../config'
import Preloader from "./Preloder";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import BasketList from "./BasketList";
import Alert from './Alert';

export default function Shop(props) {
	let [goods, setGoods] = useState([]);
	let [isLoading, setLoading] = useState(true);
	let [order, setOrder] = useState([]);
	let [isBasketShow, setBasketShow] = useState(false);
	let [alertName, setAlertName] = useState('');

	const handleBasketShow = () => {
		setBasketShow(!isBasketShow);
	}

	const changeQuantity = (evt, itemId) => {
		const handlerName = evt.target.id;

		function changeQuantity(item) {
			if (handlerName === 'increase') {
				return {
					...item,
					quantity: item.quantity + 1,
				};
			} else if (handlerName === 'decrease') {
				const newQuantity = item.quantity -= 1
				return {
					...item,
					quantity: newQuantity >= 0 ? newQuantity : 0
				}
			} return item
		}

		const newOrder = order.map(item => {
			if (item.id === itemId) {
				return changeQuantity(item)
			} else {
				return item
			}
		})

		setOrder([...newOrder])
	}

	const addToBasket = (good) => {
		const name = good.name;
		setAlertName(name);
		const newGood = {
			...good,
			quantity: 1,
		}
		let newGoodIndex = order.findIndex(good => good.id === newGood.id);
		if (newGoodIndex < 0) {
			setOrder([...order, newGood])
		} else {
			order[newGoodIndex].quantity += 1;
			setOrder([...order])
		}
	}

	const removeFromBasket = (goodId) => {
		const newOrder = order.filter(good => good.id !== goodId);
		setOrder(() =>  newOrder)
	}


	const closeAlert = () => setAlertName('')


	useEffect(() => {
		fetch(API_URL, {
			headers: {
				Authorization: '84afa0f2-1f9a9680-2135cda5-605b7d8a',
			}
		})
			.then(response => response.json())
			.then(data => {
				setGoods(data.featured);
				setLoading(false)
			})
	}, [])

	return (
		<main className="container content">
			{isLoading ? <Preloader/> : <GoodsList goods={goods} addToBasket={addToBasket}/>}
			<Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
			{isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket} changeQuantity={changeQuantity}/>}
			{alertName && <Alert alertName={alertName} closeAlert={closeAlert}/>}
		</main>
	)
}