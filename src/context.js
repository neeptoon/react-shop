import {createContext, useReducer} from 'react';
import reducer from './reducer';

const initialState = {
	goods: [],
	isLoading: true,
	order: [],
	isBasketShow: false,
	alertName: ''
}

export const ShopContext = createContext();

export function ContextProvider(props) {

	const [value, dispatch] = useReducer(reducer, initialState);
	value.closeAlert = () => {
		dispatch({type: 'CLOSE_ALERT'})
	}

	value.changeQuantity = (evt, itemId) => {
		dispatch({type: 'CHANGE_QUANTITY', payload: {evt, itemId}})
	}

	value.addToBasket = (good) => {
		dispatch({type: 'ADD_TO_BASKET', payload: good})
	}

	value.removeFromBasket = (goodId) => {
		dispatch({type: 'REMOVE_FROM_BASKET', payload: goodId})
	}

	value.handleBasketShow = () => {
		dispatch({type: 'HANDLE_BASKET_SHOW'})
	}

	value.getGoods = (data) => {
		dispatch({type: 'GET_GOODS', payload: data})
	}



	return (
		<ShopContext.Provider value={value}>
			{props.children}
		</ShopContext.Provider>
	)
}