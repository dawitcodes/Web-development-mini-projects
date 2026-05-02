import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import DestinationCard from "../components/DestinationCard";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import { destinations, services, testimonials } from "../data/siteData";

function Home() {
    const featured = destinations.slice(0, 3);

    return (
        <>
            <Hero />

            <section className="section">
                <div className="container">
                    <SectionTitle
                        subtitle="Featured places"
                        title="Top destinations for your next trip"
                    />
                    <div className="grid grid-3">
                        {featured.map((destination) => (
                            <DestinationCard key={destination.id} destination={destination} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-muted">
                <div className="container">
                    <SectionTitle subtitle="What we offer" title="Travel services" />
                    <div className="grid grid-3">
                        {services.map((service) => (
                            <ServiceCard key={service.title} service={service} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <SectionTitle subtitle="Reviews" title="What travelers say" />
                    <div className="grid grid-3">
                        {testimonials.map((testimonial) => (
                            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;