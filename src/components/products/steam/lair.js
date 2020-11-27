import React from "react";
import SteamComponent from "../../steam-product";
import { useStaticQuery, graphql } from "gatsby";


export default () => {
    const data = useStaticQuery(graphql`
        query LairOfClockworkGod {
            boxArt: file(relativePath: { eq: "games_boxart/lair-god.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <SteamComponent description={"A fast-paced Point-and-Click adventure AND an indie platfomer in one! Join adventurer Ben and wannabe indie darling Dan in a race against time to stop all the Apocalypses happening at the same time."}
            boxArt={data.boxArt.childImageSharp.fluid}
            name={"Lair of the Clockwork God"}
            link={"https://store.steampowered.com/app/1060600/Lair_of_the_Clockwork_God/"} target="_blank" rel="noopener noreferrer" />
    )
}