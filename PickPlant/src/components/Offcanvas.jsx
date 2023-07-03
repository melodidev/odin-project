export default function Offcanvas(props) {
	let totalPrice = 0;

	return (
		<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasCart">
		  <div className="offcanvas-header">
		    <div className="offcanvas-title px-2 fs-4 border-bottom border-3 border-warning" id="offcanvasCartLabel">My Shopping Cart</div>
		    <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
		  </div>
		  <div className="offcanvas-body">
		  	<div className="d-flex flex-column h-100">
		  		<div>
				  	{props.data.map((product) => {
							let occurance = props.cart.filter((v) => (v === product.id)).length;
							if (occurance == 0) return;

							let productPrice = occurance * product.price;
							totalPrice += productPrice;

						  return (
						    <div className="row mb-3" key={product.id}>
						    	<div className="col-4">
						    		<img className="img-fluid rounded border border-2 shadow-sm" src={`/images/${product.img}`} />
						    	</div>
						    	<div className="col-8">
						    		<div className="fs-5">{product.name}</div>
						    		<div className="fs-5">${productPrice}</div>
						    		<div className="d-flex align-items-center align-items-stretch mt-2">
						    			<button onClick={() => props.removeFromCart(product.id)} type="button" className="btn btn-sm btn-warning fw-semibold rounded-0">-</button>
						    			<div className="fs-5 bg-secondary-subtle px-2">{occurance}</div>
						    			<button onClick={() => props.addToCart(product.id)} type="button" className="btn btn-sm btn-warning fw-semibold rounded-0">+</button>
						    		</div>
						    	</div>
						    </div>
						  );
						})}
				  	<div className="fs-5">Total: ${totalPrice}</div>
		  		</div>
		  		{props.cart.length ? (
		  			<button
				  		onClick={props.clearCart}
							type="button"
							className="btn btn-warning btn-lg rounded-0 custom-shadow align-self-center mt-auto px-5"
							>
							Checkout
						</button>
		  		) : null }
		  	</div>
		  </div>
		</div>
	)
}

