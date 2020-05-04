import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image/withIEPolyfill"

export default function () {
    const query = useStaticQuery(graphql`
        query LogoQuery {
            logo: file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                    fluid(maxWidth: 240) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);
    return (
        <div className="logo">
            <Img
                fluid={query.logo.childImageSharp.fluid} alt={"Moonlight game devs logo"} />
        </div>
    );
}
