import React from "react";
import SteamComponent from "../../steam-product";
import { useStaticQuery, graphql } from "gatsby";


export default () => {
    const data = useStaticQuery(graphql`
        query ExileSquadron {
            boxArt: file(relativePath: { eq: "games_boxart/exile-squadron.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <SteamComponent description={"In this sidescrolling shoot ‘em up, you are the top pilot of the Exile Squadron. Using a variety of weapons, you will have to stop the forces of the Colonies, who are hell-bent on destroying Earth."}
            boxArt={data.boxArt.childImageSharp.fluid}
            name={"Exile Squadron"}
            link={"https://store.steampowered.com/app/1161910/Exile_Squadron/"} target="_blank" rel="noopener noreferrer" />
    )
}