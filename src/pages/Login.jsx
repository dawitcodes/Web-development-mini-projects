import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "../components/Button";

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
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
        if (!formData.email.trim()) newErrors.email = "Email is required";
        if (!formData.password.trim()) newErrors.password = "Password is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        setMessage("");

        if (Object.keys(validationErrors).length === 0) {
            const result = login(formData.email, formData.password);
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
                <h2>Login</h2>
                <p>Welcome back! Sign in to continue.</p>

                <form className="form" onSubmit={handleSubmit}>
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
                            placeholder="Enter your password"
                        />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>

                    <Button type="submit" className="btn-primary full-width">
                        Login
                    </Button>

                    {message && <p className="error-text">{message}</p>}
                </form>

                <p className="auth-link">
                    Don&apos;t have an account? <Link to="/signup">Signup</Link>
                </p>
            </div>
        </section>
    );
}

export default Login;