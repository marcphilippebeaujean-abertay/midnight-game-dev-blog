import React from "react";
import SteamComponent from "../../steam-product";
import { useStaticQuery, graphql } from "gatsby";


export default () => {
    const data = useStaticQuery(graphql`
        query DungeonTop {
            boxArt: file(relativePath: { eq: "games_boxart/dungeon-top.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <SteamComponent description={"A rogue-like deck-building experience coupled with table top battles. Choose a hero and allegiance then dive deep into the dungeon, evolving your deck for survival. Each choice you make matters, even in between battles!"}
            boxArt={data.boxArt.childImageSharp.fluid}
            name={"Dungeon Top"}
            link={"https://store.steampowered.com/app/1146230/DungeonTop/"} target="_blank" rel="noopener noreferrer" />
    )
}