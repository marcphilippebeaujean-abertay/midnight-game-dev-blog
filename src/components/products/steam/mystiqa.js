import React from "react";
import SteamComponent from "../../steam-product";
import { useStaticQuery, graphql } from "gatsby";


export default () => {
    const data = useStaticQuery(graphql`
        query Mystiqa {
            boxArt: file(relativePath: { eq: "games_boxart/mystiqa.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 200) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <SteamComponent description={"A procedural open-world action-rpg with a heavy focus on interesting exploration and interactions, challenging combat and epic loot."}
            boxArt={data.boxArt.childImageSharp.fluid}
            name={"Mystiqa"}
            link={"https://store.steampowered.com/app/1265500/Mystiqa/"} target="_blank" rel="noopener noreferrer" />
    )
}