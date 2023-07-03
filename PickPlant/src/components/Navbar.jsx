import { Link, useLocation } from "react-router-dom";

export default function Navbar(props) {
	const location = useLocation();
	const path = location.pathname;

	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark shadow" data-bs-theme="dark">
			  <div className="container-fluid">
			    <Link className="navbar-brand" to="/">🌱 PickPlant</Link>
			    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>
			    <div className="collapse navbar-collapse" id="navbarSupportedContent">
			      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
			        <li className="nav-item">
			          <Link
			          	className={`nav-link ${path === '/' && 'active'}`}
			          	to="/"
			          >
			          	Home
			          </Link>
			        </li>
			        <li className="nav-item">
			          <Link
			          	className={`nav-link ${path.startsWith('/products') && 'active'}`}
			          	to="/products"
			          >
			          	Products
			          </Link>
			        </li>
			        <li className="nav-item">
			          <a data-bs-toggle="offcanvas" className="nav-link" href="#offcanvasCart">
			          	<div className="position-relative width-20">
			          		<i className="fa-solid fa-cart-shopping"></i>
			          		<div className="product-count position-absolute bg-warning text-dark rounded-circle">
			          			{props.cart.length ? props.cart.length : null}
			          		</div>
			          	</div>
			          </a>
			        </li>
			      </ul>
			    </div>
			  </div>
			</nav>
		</div>
	)
}
