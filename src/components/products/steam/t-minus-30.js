import React from "react";
import SteamComponent from "../../steam-product";
import { useStaticQuery, graphql } from "gatsby";


export default () => {
    const data = useStaticQuery(graphql`
        query TMinus30 {
            boxArt: file(relativePath: { eq: "games_boxart/t-minus.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <SteamComponent description={"Plan a city and build a space fleet to escape a dying Earth before time runs out. You have 30 minutes to scavenge a post-apocalyptic environment to build infrastructure, grow crops, generate power, and assemble rockets to save as many people as you can."}
            boxArt={data.boxArt.childImageSharp.fluid}
            name={"T-Minus-30"}
            link={"https://store.steampowered.com/app/1371750/TMinus_30/"} target="_blank" rel="noopener noreferrer" />
    )
}