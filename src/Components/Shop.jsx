import React, {useEffect, useState} from "react";
import {API_KEY, API_URL} from '../config'
import Preloader from "./Preloder";
import GoodsList from "./GoodsList";
import Cart from "./Cart";

export default function Shop(props) {
	let [goods, setGoods] = useState([]);
	let [isLoading, setLoading] = useState(true);
	let [quantity, setQuantity] = useState(5);

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
			{isLoading ? <Preloader/> : <GoodsList goods={goods}/>}
			{quantity ? <Cart quantity={quantity}/> : null}
		</main>
	)
}