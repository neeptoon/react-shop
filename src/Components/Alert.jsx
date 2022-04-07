import {ShopContext} from "../context";
import {useEffect, useContext} from 'react';

export default function Alert() {
	const {alertName, closeAlert} = useContext(ShopContext);

	useEffect(() => {
		const timerId = setInterval(closeAlert, 3000 )

		return () => clearInterval(timerId)
	}, [alertName])

	return (
		<div className="toast-container">
			<div className="toast">{alertName} добавлен в корзину</div>
		</div>
	)

}