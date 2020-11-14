import React from "react";
import SteamComponent from "../../steam-product";
import { useStaticQuery, graphql } from "gatsby";


export default () => {
    const data = useStaticQuery(graphql`
        query HimekoSutori {
            boxArt: file(relativePath: { eq: "games_boxart/himeko.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <SteamComponent description={"Himeko Sutori is a tactical, turn-based RPG that combines intimate character development with epic battles featuring hundreds of unique characters. With the included campaign editor, you can make new worlds and new adventures, making Himeko Sutori your story."}
            boxArt={data.boxArt.childImageSharp.fluid}
            name={"Himeko Sutori"}
            link={"https://store.steampowered.com/app/669500/Himeko_Sutori/"} target="_blank" rel="noopener noreferrer" />
    )
}