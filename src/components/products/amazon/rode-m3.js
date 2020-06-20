import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AffiliateBlock from "../../affiliate-product";

export default () => {
    const data = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "affiliate_products/amazon/m3-mic.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <div>
            <AffiliateBlock
                image={data.image.childImageSharp.fluid}
                price={104.99}
                name={"Rode M3 Microphone"}
                link={"hhttps://www.amazon.com/gp/product/B000UXIEPU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000UXIEPU&linkCode=as2&tag=mpbeaujean-20&linkId=6aa0e54d669896d3226b0c058fc826f0"} />
        </div>)
}