function ServiceCard({ service }) {
    return (
        <div className="card service-card">
            <h3>{service.title}</h3>
            <p>{service.text}</p>
        </div>
    );
}

export default ServiceCard;
