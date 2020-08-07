import React from "react";
import SteamComponent from "../../steam-product";
import { useStaticQuery, graphql } from "gatsby";


export default () => {
    const data = useStaticQuery(graphql`
        query Stacksquatch {
            boxArt: file(relativePath: { eq: "games_boxart/stacksquatsh.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <SteamComponent description={"Sit back and stack with Dogtective in a colourful, floating world of cryptids in this VR action-puzzle game."}
            boxArt={data.boxArt.childImageSharp.fluid}
            name={"Stacksquatch"}
            link={"https://store.steampowered.com/app/937090/Stacksquatch/"} target="_blank" rel="noopener noreferrer" />
    )
}