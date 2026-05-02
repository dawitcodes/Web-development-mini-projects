import { useParams, Link } from "react-router-dom";
import { destinations } from "../data/siteData";
import Button from "../components/Button";

function DestinationDetails() {
    const { id } = useParams();
    const destination = destinations.find((item) => item.id === Number(id));

    if (!destination) {
        return (
            <section className="section page-section">
                <div className="container">
                    <h2>Destination not found</h2>
                    <p>This travel location does not exist.</p>
                    <Link to="/destinations">
                        <Button className="btn-primary">Back to Destinations</Button>
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="section page-section">
            <div className="container details-layout">
                <img src={destination.image} alt={destination.name} className="details-img" />

                <div className="details-content">
                    <span className="badge">{destination.category}</span>
                    <h1>{destination.name}</h1>
                    <p className="details-description">{destination.description}</p>

                    <div className="details-info">
                        <div>
                            <span>Price</span>
                            <strong>{destination.price}</strong>
                        </div>
                        <div>
                            <span>Rating</span>
                            <strong>★ {destination.rating}</strong>
                        </div>
                    </div>

                    <div className="details-box">
                        <h3>Why choose this destination?</h3>
                        <p>
                            This destination offers a balanced mix of comfort, beauty, and memorable travel
                            experiences. Perfect for solo trips, family vacations, and group adventures.
                        </p>
                    </div>

                    <Link to="/contact">
                        <Button className="btn-primary">Book Now</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default DestinationDetails;