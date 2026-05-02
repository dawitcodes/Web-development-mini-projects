function TestimonialCard({ testimonial }) {
    return (
        <div className="card testimonial-card">
            <p className="quote">"{testimonial.text}"</p>
            <h4>{testimonial.name}</h4>
        </div>
    );
}

export default TestimonialCard;
