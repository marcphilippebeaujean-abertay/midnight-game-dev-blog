import React from "react";
import Img from "gatsby-image/withIEPolyfill"
import { useStaticQuery, graphql } from "gatsby";

export default ({ bannerWrapperWidth }) => {
    const query = useStaticQuery(graphql`
    query{
        logoBanner: file(relativePath: { eq: "logo-banner.png" }) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
    `);
    const maxComponentWidth = bannerWrapperWidth === undefined ? "600px" : bannerWrapperWidth;
    return (
        <div style={{ maxWidth: maxComponentWidth, display: "block", margin: "0 auto" }}>
            <Img fluid={query.logoBanner.childImageSharp.fluid} alt={"Banner of the moonlight game devs logo"} />
        </div>
    )
}