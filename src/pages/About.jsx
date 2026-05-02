import SectionTitle from "../components/SectionTitle";

function About() {
    return (
        <section className="section page-section">
            <div className="container">
                <SectionTitle subtitle="About us" title="We make travel easy and modern" center />

                <div className="about-box">
                    <p>
                        TravelX is a modern travel website built to help users discover destinations,
                        explore services, and book memorable trips with ease.
                    </p>
                    <p>
                        This project uses React, React Router, Context API, localStorage, and a scalable
                        component structure for clean development.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;