import { useParams } from "react-router-dom";
import data from "../data.js";

export default function Product(props) {
	const { productId } = useParams();

	const product = data.find(product => product.id == productId);
	if (!product) return;

	return (
		<div className="container bg-light border border-dark border-2 mt-lg-4 p-4">
			<div className="row">
				<div className="col-lg-4 col-12">
					<img className="img-fluid rounded border border-2 shadow-sm" src={`/images/${product.img}`} />
				</div>
				<div className="col-lg-8 col-12">
					<div className="fs-1 fw-semibold text-ligt mt-2">{product.name}</div>
					<div className="fs-4 fw-lighter">{product.latin}</div>
					<div>{product.description}</div>
					<div className="fs-3">${product.price}</div>
					<button
						data-bs-toggle="offcanvas"
						data-bs-target="#offcanvasCart"
						type="button"
						className="btn btn-warning rounded-0 custom-shadow mt-lg-4 mt-2"
						onClick = {() => props.addToCart(product.id)}
						>Add to Cart
					</button>
				</div>
			</div>
		</div>
	)
}