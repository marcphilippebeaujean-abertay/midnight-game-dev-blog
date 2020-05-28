import React from "react";
import SteamComponent from "../../steam-product";
import { useStaticQuery, graphql } from "gatsby";


export default () => {
    const data = useStaticQuery(graphql`
        query PuppetMaster {
            boxArt: file(relativePath: { eq: "games_boxart/puppet_master.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <SteamComponent description={"Puppet Master is a puzzle/strategy game where you are the Illuminati. Infiltrate the world's nations and bribe/seduce/intimidate your way to power."}
            boxArt={data.boxArt.childImageSharp.fluid}
            name={"Puppet Master: The Shadow Government Simulator"}
            link={"https://store.steampowered.com/app/1281190/Puppet_Master_The_Shadow_Government_Simulator/"} target="_blank" rel="noopener noreferrer" />
    )
}