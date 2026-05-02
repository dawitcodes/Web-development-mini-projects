function SectionTitle({ subtitle, title, center = false }) {
    return (
        <div className={`section-title ${center ? "center" : ""}`}>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
            <h2>{title}</h2>
        </div>
    );
}

export default SectionTitle;