import { Link } from "react-router-dom";
import Button from "../components/Button";

function NotFound() {
    return (
        <section className="section page-section">
            <div className="container notfound">
                <h1>404</h1>
                <p>Page not found.</p>
                <Link to="/">
                    <Button className="btn-primary">Go Home</Button>
                </Link>
            </div>
        </section>
    );
}

export default NotFound;