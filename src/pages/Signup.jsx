import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "../components/Button";

function Signup() {
    const { signup } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(formData.email))
            newErrors.email = "Enter a valid email";
        if (!formData.password.trim()) newErrors.password = "Password is required";
        else if (formData.password.length < 6)
            newErrors.password = "Password must be at least 6 characters";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        setMessage("");

        if (Object.keys(validationErrors).length === 0) {
            const result = signup(formData.name, formData.email, formData.password);
            if (result.success) {
                navigate("/");
            } else {
                setMessage(result.message);
            }
        }
    };

    return (
        <section className="auth-section">
            <div className="auth-card card">
                <h2>Signup</h2>
                <p>Create your account to start traveling.</p>

                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Create a password"
                        />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>

                    <Button type="submit" className="btn-primary full-width">
                        Create Account
                    </Button>

                    {message && <p className="error-text">{message}</p>}
                </form>

                <p className="auth-link">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </section>
    );
}

export default Signup;