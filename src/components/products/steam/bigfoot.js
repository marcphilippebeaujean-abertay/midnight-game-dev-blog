import React from "react";
import SteamComponent from "../../steam-product";
import { useStaticQuery, graphql } from "gatsby";


export default () => {
    const data = useStaticQuery(graphql`
        query bigfoot {
            boxArt: file(relativePath: { eq: "games_boxart/bigfoot.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <SteamComponent description={"You have a unique opportunity to gather a team of friends or go on a solitary expedition to the forests of wild reserves and feel like a real hunter for Bigfoots."}
            boxArt={data.boxArt.childImageSharp.fluid}
            name={"BIGFOOT"}
            link={"https://store.steampowered.com/app/509980/BIGFOOT/"} target="_blank" rel="noopener noreferrer" />
    )
}