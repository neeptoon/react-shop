import {useEffect} from 'react';

export default function Alert(props) {
	const {alertName, closeAlert} = props;

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