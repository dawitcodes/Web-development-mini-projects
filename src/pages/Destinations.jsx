import SectionTitle from "../components/SectionTitle";
import DestinationCard from "../components/DestinationCard";
import { destinations } from "../data/siteData";

function Destinations() {
    return (
        <section className="section page-section">
            <div className="container">
                <SectionTitle
                    subtitle="Browse places"
                    title="All destinations"
                    center
                />

                <div className="grid grid-3">
                    {destinations.map((destination) => (
                        <DestinationCard key={destination.id} destination={destination} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Destinations;