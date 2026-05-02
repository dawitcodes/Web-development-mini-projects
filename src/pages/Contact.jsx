import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";

const initialState = {
    name: "",
    email: "",
    message: ""
};

function Contact() {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(formData.email))
            newErrors.email = "Enter a valid email";
        if (!formData.message.trim()) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        setSuccess("");

        if (Object.keys(validationErrors).length === 0) {
            setSuccess("Message sent successfully!");
            setFormData(initialState);
        }
    };

    return (
        <section className="section page-section">
            <div className="container contact-layout">
                <div>
                    <SectionTitle subtitle="Get in touch" title="Contact us" />
                    <p className="muted">
                        Reach out for travel support, custom packages, or general questions.
                    </p>
                </div>

                <form className="form card form-card" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input name="name" value={formData.name} onChange={handleChange} />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input name="email" value={formData.email} onChange={handleChange} />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        {errors.message && <span className="error">{errors.message}</span>}
                    </div>

                    <Button type="submit" className="btn-primary full-width">
                        Send Message
                    </Button>

                    {success && <p className="success">{success}</p>}
                </form>
            </div>
        </section>
    );
}

export default Contact;