import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AffiliateBlock from "../../affiliate-product";

export default () => {
    const data = useStaticQuery(graphql`
        query {
            mathsImage: file(relativePath: { eq: "affiliate_products/unity/world-map-strategy.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <AffiliateBlock
            image={data.mathsImage.childImageSharp.fluid}
            price={95.00}
            name={"World Map Strategy Kit"}
            link={"https://assetstore.unity.com/packages/templates/systems/world-map-strategy-kit-55121"} />
    )
}