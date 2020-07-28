import React from "react";
import SteamComponent from "../../steam-product";
import { useStaticQuery, graphql } from "gatsby";


export default () => {
    const data = useStaticQuery(graphql`
        query GangBeasts {
            boxArt: file(relativePath: { eq: "games_boxart/gang-beasts.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <SteamComponent description={"Gang Beasts is a silly multiplayer party game with surly gelatinous characters, brutal slapstick fight sequences, and absurd hazardous environments, set in the mean streets of Beef City."}
            boxArt={data.boxArt.childImageSharp.fluid}
            name={"Gang Beasts"}
            link={"https://store.steampowered.com/app/285900/Gang_Beasts/"} target="_blank" rel="noopener noreferrer" />
    )
}