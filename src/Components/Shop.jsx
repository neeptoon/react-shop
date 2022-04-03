import React, {useEffect, useState} from "react";
import {API_KEY, API_URL} from '../config'
import Preloader from "./Preloder";
import GoodsList from "./GoodsList";

export default function Shop(props) {
	let [goods, setGoods] = useState([]);
	let [isLoading, setLoading] = useState(true)

	useEffect(() => {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY,
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
		</main>
	)
}