import React from "react";
import SteamComponent from "../../steam-product";
import { useStaticQuery, graphql } from "gatsby";


export default () => {
    const data = useStaticQuery(graphql`
        query SlashersKeep {
            boxArt: file(relativePath: { eq: "games_boxart/slashers-keep.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <SteamComponent description={"Hack, slash, shoot and loot your way through procedurally generated dungeons! Smack your enemies into spikes with your inventory sack!"}
            boxArt={data.boxArt.childImageSharp.fluid}
            name={"Slasher's Keep"}
            link={"https://store.steampowered.com/app/598060/Slashers_Keep/"} target="_blank" rel="noopener noreferrer" />
    )
}