import React from "react";
import SteamComponent from "../../steam-product";
import { useStaticQuery, graphql } from "gatsby";


export default () => {
    const data = useStaticQuery(graphql`
        query anrade {
            boxArt: file(relativePath: { eq: "games_boxart/anrade.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <SteamComponent description={"Black magic in the age of pike and shot! Reload your musket after every blast in “Heidelberg 1693”, a challenging 2D action adventure set in a dark and twisted vision of Germany in the late 17th century."}
            boxArt={data.boxArt.childImageSharp.fluid}
            name={"Heidelberg 1693"}
            link={"https://store.steampowered.com/app/1253520/Heidelberg_1693/"} target="_blank" rel="noopener noreferrer" />
    )
}