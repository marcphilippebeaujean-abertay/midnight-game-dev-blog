import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AffiliateBlock from "../../affiliate-product";

export default () => {
    const data = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "affiliate_products/amazon/ice-blue.png" }) {
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
                price={72.00}
                name={"Blue Microphones Snowball iCE"}
                link={"https://www.amazon.com/gp/product/B014PYGTUQ/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B014PYGTUQ&linkCode=as2&tag=mpbeaujean-20&linkId=db63b5d3d4cc5b0313745a16eed56594"} />
        </div>)
}