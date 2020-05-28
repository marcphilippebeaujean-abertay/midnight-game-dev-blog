import React from "react";
import SteamComponent from "../../steam-product";
import { useStaticQuery, graphql } from "gatsby";


export default () => {
    const data = useStaticQuery(graphql`
        query BRS {
            boxArt: file(relativePath: { eq: "games_boxart/blood-rally-show.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <SteamComponent description={"Bloody Rally Show is dystopian roguelite combat racing game with infinite variety of race tracks, campaigns, missions, leaderboards, daily challenges, track editor, car editor, car tuning, customization, car battles, and multiple game modes, including one where you are a pedestrian."}
            boxArt={data.boxArt.childImageSharp.fluid}
            name={"Blood Rally Show"}
            link={"https://store.steampowered.com/app/926860/Bloody_Rally_Show/ "} target="_blank" rel="noopener noreferrer" />
    )
}