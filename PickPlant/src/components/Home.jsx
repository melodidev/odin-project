import { useNavigate } from "react-router-dom";

export default function Home() {
	const navigate = useNavigate();

	return (
		<div className="home-page">
			<div className="container mt-5">
				<div className="d-flex">
					<div className="display-1 bg-light fw-semibold px-2 mt-5">Pick a Plant</div>
				</div>
				<div className="d-flex">
					<div className="display-1 bg-light fw-semibold px-2 mt-2">for your House</div>
				</div>
				<button
					onClick={() => navigate("/products")}
					type="button"
					className="btn btn-warning btn-lg rounded-0 custom-shadow mt-3"
				>
					Visit the Shop
				</button>
			</div>
		</div>
	)
}