import React from "react";
import SteamComponent from "../../steam-product";
import { useStaticQuery, graphql } from "gatsby";


export default () => {
    const data = useStaticQuery(graphql`
        query Shing {
            boxArt: file(relativePath: { eq: "games_boxart/shing.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <SteamComponent description={"Experience the most exciting and immersive beat-em-up combat system ever – become a kickass ninja and slice some demons in style!"}
            boxArt={data.boxArt.childImageSharp.fluid}
            name={"Shing!"}
            link={"https://store.steampowered.com/app/1103730/Shing/"} target="_blank" rel="noopener noreferrer" />
    )
}