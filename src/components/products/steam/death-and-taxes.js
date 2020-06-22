import React from "react";
import SteamComponent from "../../steam-product";
import { useStaticQuery, graphql } from "gatsby";


export default () => {
    const data = useStaticQuery(graphql`
        query DeathAndTaxes {
            boxArt: file(relativePath: { eq: "games_boxart/death-and-taxes.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <SteamComponent description={"In this 2D, short narrative-based game, you assume the role of the Grim Reaper... on an office job. Your job is to decide which people are going to live or die. The consequences of your choices are yours to bear, while the mystery of your incarnation awaits revelation!"}
            boxArt={data.boxArt.childImageSharp.fluid}
            name={"Death and Taxes"}
            link={"https://store.steampowered.com/app/1166290/Death_and_Taxes/"} target="_blank" rel="noopener noreferrer" />
    )
}