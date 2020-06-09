import React from "react";
import SteamComponent from "../../steam-product";
import { useStaticQuery, graphql } from "gatsby";


export default () => {
    const data = useStaticQuery(graphql`
        query Ufflegrim {
            boxArt: file(relativePath: { eq: "games_boxart/ufflegrim.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <SteamComponent description={"Ufflegrim is a traditional roguelike with card-based, creature summoning combat. Every enemy is not only a challenge, but also a chance to capture unique allies and abilities for your deck. Take on the pilgrimage and travel to the bottom of the 100 floors."}
            boxArt={data.boxArt.childImageSharp.fluid}
            name={"Ufflegrim"}
            link={"https://store.steampowered.com/app/1072800/Ufflegrim/"} target="_blank" rel="noopener noreferrer" />
    )
}