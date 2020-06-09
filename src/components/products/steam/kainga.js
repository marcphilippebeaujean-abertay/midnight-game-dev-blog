import React from "react";
import SteamComponent from "../../steam-product";
import { useStaticQuery, graphql } from "gatsby";


export default () => {
    const data = useStaticQuery(graphql`
        query Kainga {
            boxArt: file(relativePath: { eq: "games_boxart/kainga.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <SteamComponent description={"Kainga is a ancient fantasy village builder where your environment affects your culture, technology and strategy. Advance and adapt to the pressures of the climate, beasts and other tribes."}
            boxArt={data.boxArt.childImageSharp.fluid}
            name={"Kainga"}
            link={"https://store.steampowered.com/app/1269710/Kainga/"} target="_blank" rel="noopener noreferrer" />
    )
}