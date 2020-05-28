import React from "react";
import SteamComponent from "../../steam-product";
import { useStaticQuery, graphql } from "gatsby";


export default () => {
    const data = useStaticQuery(graphql`
        query Socketeer {
            boxArt: file(relativePath: { eq: "games_boxart/socketeer.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <SteamComponent description={"Strategically hack robots to control their combat abilities and use them to advance deeper into each space station stronghold in this charming sci-fi roguelike."}
            boxArt={data.boxArt.childImageSharp.fluid}
            name={"Socketeer"}
            link={"https://store.steampowered.com/app/750500/Socketeer/"} target="_blank" rel="noopener noreferrer" />
    )
}