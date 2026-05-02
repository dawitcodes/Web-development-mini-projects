function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <div>
                    <h3>TravelX</h3>
                    <p>Modern travel website built with React.</p>
                </div>

                <div>
                    <h4>Pages</h4>
                    <ul>
                        <li>Home</li>
                        <li>Destinations</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div>
                    <h4>Contact</h4>
                    <ul>
                        <li>travelx@email.com</li>
                        <li>+251 900 000 000</li>
                    </ul>
                </div>
            </div>

            <p className="footer-bottom">
                © {new Date().getFullYear()} TravelX. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;




