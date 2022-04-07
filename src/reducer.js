export default function reducer(state, {type, payload}) {
	switch (type) {
		case 'GET_GOODS' :
			return {
				...state,
				goods: payload || [],
				isLoading: false,
			}
		case 'CLOSE_ALERT' :
			return {
				...state,
				alertName: '',
			};
		case 'ADD_TO_BASKET' : {
			const name = payload.name;
			const newGood = {
				...payload,
				quantity: 1,
			};
			let newOrder = null;
			let newGoodIndex = state.order.findIndex(good => good.id === newGood.id);
			if (newGoodIndex < 0) {
				newOrder = [...state.order, newGood]
			} else {
				state.order[newGoodIndex].quantity += 1;
				newOrder = [...state.order]
			}
			return {
				...state,
				order: newOrder,
				alertName: name,
			}
		}
		case 'CHANGE_QUANTITY' : {
			const handlerName = payload.evt.target.id;

			function setQuantity(item) {
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

			const newOrder = state.order.map(item => {
				if (item.id === payload.itemId) {
					return setQuantity(item)
				} else {
					return item
				}
			})

			return {
				...state,
				order: newOrder,
			}
		}
		case 'REMOVE_FROM_BASKET' :
			return {
				...state,
				order: state.order.filter(good => good.id !== payload)
			}
		case 'HANDLE_BASKET_SHOW' :
			return {
				...state,
				isBasketShow: !state.isBasketShow,
			}
		default:
			return state;
	}
}