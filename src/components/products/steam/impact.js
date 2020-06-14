import React from "react";
import SteamComponent from "../../steam-product";
import { useStaticQuery, graphql } from "gatsby";


export default () => {
    const data = useStaticQuery(graphql`
        query Impact {
            boxArt: file(relativePath: { eq: "games_boxart/impact.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <SteamComponent description={"A stylish and visceral FPS with loads of bullet time, completely destructible environments, and a dark electronic soundtrack."}
            boxArt={data.boxArt.childImageSharp.fluid}
            name={"IMPACT"}
            link={"https://store.steampowered.com/app/1227690/IMPACT/"} target="_blank" rel="noopener noreferrer" />
    )
}