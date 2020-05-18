import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AffiliateBlock from "../../affiliate-product";

export default () => {
    const data = useStaticQuery(graphql`
        query {
            mathsImage: file(relativePath: { eq: "affiliate_products/amazon/maths-book.jpg" }) {
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
            price={50.82}
            name={"Essential Mathematics for Games and Interactive Applications"}
            link={"https://www.amazon.com/gp/product/B015FDE53O/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B015FDE53O&linkCode=as2&tag=mpbeaujean-20&linkId=94c6dbccff4a16509c9d85b2d07c7ea9"} />
    )
}