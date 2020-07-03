import React from "react";
import SteamComponent from "../../steam-product";
import { useStaticQuery, graphql } from "gatsby";


export default () => {
    const data = useStaticQuery(graphql`
        query JetIsland {
            boxArt: file(relativePath: { eq: "games_boxart/jet-island.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <SteamComponent description={"Slide anywhere on your hoverboard at extreme speeds! Explore the massive open world of Jet Island! Learn to skate on any surface, swing from tall buildings, fly in ways you never knew were possible! Defeat the 4 giant boss fights! Get ready to experience complete freedom in VR!"}
            boxArt={data.boxArt.childImageSharp.fluid}
            name={"Jet Island"}
            link={"https://store.steampowered.com/app/587220/Jet_Island/"} target="_blank" rel="noopener noreferrer" />
    )
}