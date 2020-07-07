import React from "react";
import SteamComponent from "../../steam-product";
import { useStaticQuery, graphql } from "gatsby";


export default () => {
    const data = useStaticQuery(graphql`
        query SwordMaster {
            boxArt: file(relativePath: { eq: "games_boxart/sword-master-vr.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <SteamComponent description={"Enter the virtual reality sword fighting arena of Sword Master VR! Test your skills with the blade against smart and interactive AI enemies! Unlock new swords and game modes! Prove that you are the sword master!"}
            boxArt={data.boxArt.childImageSharp.fluid}
            name={"Sword Master VR"}
            link={"https://store.steampowered.com/app/523710/Sword_Master_VR/"} target="_blank" rel="noopener noreferrer" />
    )
}