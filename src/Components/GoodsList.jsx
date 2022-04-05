import GoodsItem from "./GoodsItem";

export default function GoodsList(props) {
	const {goods = [], addToBasket} = props;

	if(!goods.length) {
		return <h3>Nothing here</h3>
	}

	return (
		<div className="goods">
			{goods.map(good => <GoodsItem key={good.id} good={good} addToBasket={addToBasket}/>)}
		</div>

	)
}