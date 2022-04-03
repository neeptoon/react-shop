export default function GoodsItem(props) {
	const {id, name, description, price, full_background} = props;
	return (
		<div className="card" id={id}>
			<div className="card-image">
				<img src={full_background}/>
			</div>
			<div className="card-content">
				<span className="card-title">{name}</span>
				<p>{description}</p>
			</div>
			<div className="card-action">
				<button className="btn">Купить</button>
				<span className="right">{price} &#8381;</span>
			</div>
		</div>
	)
}

