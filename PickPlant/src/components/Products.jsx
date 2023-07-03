import { Link } from "react-router-dom";

export default function Products(props) {
	return (
		<div className="bg-light py-lg-4 py-3 px-lg-5 px-2">
	    <div className="row">
        {props.data.map(plant => (
          <div key={plant.id} className="col-lg-2 col-6">
          	<div className="border border-2 rounded shadow-sm my-2">

          		<Link to={`/products/${plant.id}`} className="text-decoration-none">
	          		<img src={`/images/${plant.img}`} className="img-fluid rounded-top" />
	          		<div className="d-flex justify-content-between px-2 py-1">
	          			<div className="text-dark">{plant.name}</div>
	          			<div className="text-secondary">${plant.price}</div>
	          		</div>
          		</Link>

          	</div>
          </div>
        ))}
      </div>
		</div>
	)
}