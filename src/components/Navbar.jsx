import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
    const { currentUser, logout, isLoggedIn } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <header className="navbar">
            <div className="container nav-inner">
                <Link to="/" className="logo">
                    TravelX
                </Link>

                <nav className="nav-links">
                    <NavLink to="/" end>
                        Home
                    </NavLink>
                    <NavLink to="/destinations">Destinations</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>

                <div className="nav-auth">
                    {isLoggedIn ? (
                        <>
                            <span className="user-greeting">Hi, {currentUser?.name}</span>
                            <button className="btn btn-secondary" onClick={handleLogout}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="nav-link-btn">
                                Login
                            </Link>
                            <Link to="/signup" className="nav-link-btn nav-link-btn-primary">
                                Signup
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Navbar;

