import { Link } from "react-router-dom";
import Button from "./Button";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-overlay">
                <div className="container hero-content">
                    <p className="hero-tag">Explore the world with confidence</p>
                    <h1>Discover unforgettable travel experiences</h1>
                    <p className="hero-text">
                        Plan your next trip with handpicked destinations, trusted guides,
                        and smooth booking.
                    </p>

                    <div className="hero-actions">
                        <Link to="/destinations">
                            <Button className="btn-primary">Explore Destinations</Button>
                        </Link>
                        <Link to="/signup">
                            <Button className="btn-secondary">Create Account</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;




