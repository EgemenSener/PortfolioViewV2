const Footer = (props) => {
    return (
        <section id="footer" className="footer">
            <div className="container">
                <div className="socialIcons">
                        <a className="btn btn-social-icon btn-github" href="https://github.com/EgemenSener">
                            <span className="fa fa-github"></span>
                        </a>
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/egemensener1998">
                            <span className="fa fa-linkedin"></span>
                        </a>
                        <a className="btn btn-social-icon btn-home" href="#home">
                            <span className="fa fa-home"></span>
                        </a>
                        <a className="btn btn-social-icon btn-google" href="mailto:egemensener98@gmail.com?subject=Hi👋">
                            <span className="fa fa-google"></span>
                        </a>
                        <a className="btn btn-social-icon btn-instagram" href="https://instagram.com/egemensenerr?igshid=ZDdkNTZiNTM=">
                            <span className="fa fa-instagram"></span>
                        </a>
                </div>
                <div className="socialIcons">
                    <div>
                        <p>© Copyright 2023 Egemen ŞENER</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Footer;