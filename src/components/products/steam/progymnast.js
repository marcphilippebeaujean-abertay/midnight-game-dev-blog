import React from "react";
import SteamComponent from "../../steam-product";
import { useStaticQuery, graphql } from "gatsby";


export default () => {
    const data = useStaticQuery(graphql`
        query ProGymnast {
            boxArt: file(relativePath: { eq: "games_boxart/pro-gymnast.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <SteamComponent description={"Exciting Acrobatic Action!"}
            boxArt={data.boxArt.childImageSharp.fluid}
            name={"Pro Gymnast"}
            link={"https://store.steampowered.com/app/1214520/Pro_Gymnast/"} target="_blank" rel="noopener noreferrer" />
    )
}