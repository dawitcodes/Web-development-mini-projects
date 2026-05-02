import { Link } from "react-router-dom";
import Button from "./Button";

function DestinationCard({ destination }) {
    return (
        <article className="card destination-card">
            <img src={destination.image} alt={destination.name} className="card-img" />
            <div className="card-body">
                <span className="badge">{destination.category}</span>
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>

                <div className="card-meta">
                    <strong>{destination.price}</strong>
                    <span>★ {destination.rating}</span>
                </div>

                <Link to={`/destinations/${destination.id}`}>
                    <Button className="btn-primary full-width">View Details</Button>
                </Link>
            </div>
        </article>
    );
}

export default DestinationCard;




