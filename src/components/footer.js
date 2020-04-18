import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Logo from "./logo";
import Navlinks from "./navlinks";
import FooterLinks from "./footer-links";
import "../style/footer.less";

export default function () {
    const query = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    author
                }
            }
        }
    `);

    return (
        <footer className="footer">
            <div className="container">
                <div className="logo">
                    <Link to="/" title={query.site.siteMetadata.title}>
                        <Logo />
                    </Link>
                </div>
                <div className="navlinks text-secondary">
                    <Navlinks />
                </div>
                <div
                    className="navlinks text-secondary"
                    style={{ marginTop: "20px" }}
                >
                    <FooterLinks />
                </div>
                <div className="mt-2">
                    <p>
                        Powered by
                        <a
                            href="https://github.com/akzhy/gatsby-starter-elemental"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {" "}
                            Elemental Theme{" "}
                        </a>
                        for Gatsby
                    </p>
                </div>
                <p className="text-primary f-d">
                    Copyright &copy; {query.site.siteMetadata.author}{" "}
                    {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
}
