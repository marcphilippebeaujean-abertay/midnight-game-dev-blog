import React from "react";
import SteamComponent from "../../steam-product";
import { useStaticQuery, graphql } from "gatsby";


export default () => {
    const data = useStaticQuery(graphql`
        query PrimalLight {
            boxArt: file(relativePath: { eq: "games_boxart/primal-light.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <SteamComponent description={"Inhabit Krog, a mysterious blue creature in a red loincloth, as he traverses a labyrinth of ladders, levers, traps, and monsters. Explore the nooks and crannies of a bizarre and evocative world as you hack and slash your way to victory, leaving a graveyard of grotesque bosses in your wake."}
            boxArt={data.boxArt.childImageSharp.fluid}
            name={"Primal Light"}
            link={"https://store.steampowered.com/app/771420/Primal_Light/"} target="_blank" rel="noopener noreferrer" />
    )
}