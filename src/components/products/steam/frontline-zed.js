import React from "react";
import SteamComponent from "../../steam-product";
import { useStaticQuery, graphql } from "gatsby";


export default () => {
    const data = useStaticQuery(graphql`
        query FrontlineZed {
            boxArt: file(relativePath: { eq: "games_boxart/frontline-zed.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <SteamComponent description={"Defend your fortified barricade by night, collect weapons and conduct repairs by day. Survive long enough to make your way through America and towards rescue."}
            boxArt={data.boxArt.childImageSharp.fluid}
            name={"Frontline Zed"}
            link={"https://store.steampowered.com/app/915490/Frontline_Zed/"} target="_blank" rel="noopener noreferrer" />
    )
}