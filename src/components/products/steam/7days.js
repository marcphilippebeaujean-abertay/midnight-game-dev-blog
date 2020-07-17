import React from "react";
import SteamComponent from "../../steam-product";
import { useStaticQuery, graphql } from "gatsby";


export default () => {
    const data = useStaticQuery(graphql`
        query sevendays {
            boxArt: file(relativePath: { eq: "games_boxart/7-summer-days.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <SteamComponent description={"A visual novel that takes place in the same universe as 7 summer days."}
            boxArt={data.boxArt.childImageSharp.fluid}
            name={"7 summer days: Youth sky"}
            link={"https://store.steampowered.com/app/1331590/7_summer_days_Youth_sky/"} target="_blank" rel="noopener noreferrer" />
    )
}