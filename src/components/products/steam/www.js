import React from "react";
import SteamComponent from "../../steam-product";
import { useStaticQuery, graphql } from "gatsby";


export default () => {
    const data = useStaticQuery(graphql`
        query WildWestAndWizards {
            boxArt: file(relativePath: { eq: "games_boxart/wild-west-and-wizards.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <SteamComponent description={"Wild West and Wizards is an open world exploration RPG set in a re-imagined new frontier. Pick a class and level up unlocking abilities and exploring a world filled with quests, loot, outlaws, bosses, spells, caves, towns, and other mysterious places."}
            boxArt={data.boxArt.childImageSharp.fluid}
            name={"Wild West and Wizards"}
            link={"https://store.steampowered.com/app/1071290/Wild_West_and_Wizards/"} target="_blank" rel="noopener noreferrer" />
    )
}