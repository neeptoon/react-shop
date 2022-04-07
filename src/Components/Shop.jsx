import React, {useEffect, useContext} from "react";
import {ShopContext} from "../context";
import {API_KEY, API_URL} from '../config'
import Preloader from "./Preloder";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import BasketList from "./BasketList";
import Alert from './Alert';

export default function Shop(props) {
	const {isLoading, order, isBasketShow, alertName, getGoods} = useContext(ShopContext);


	useEffect(function GetGoods()  {
		fetch(API_URL, {
			headers: {
				Authorization: '84afa0f2-1f9a9680-2135cda5-605b7d8a',
			}
		})
			.then(response => response.json())
			.then(data => {
				getGoods(data.featured);
			})
	}, [])

	return (
		<main className="container content">
			{isLoading ? <Preloader/> : <GoodsList/>}
			<Cart quantity={order.length}/>
			{isBasketShow && <BasketList/>}
			{alertName && <Alert/>}
		</main>
	)
}