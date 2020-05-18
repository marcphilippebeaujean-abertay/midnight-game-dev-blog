import React from "react";
import SteamComponent from "../../steam-product";
import { useStaticQuery, graphql } from "gatsby";


export default () => {
    const data = useStaticQuery(graphql`
        query ForgetfulDictator {
            boxArt: file(relativePath: { eq: "games_boxart/forgetful.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 250) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <SteamComponent description={"A powerful dictator has everything he needs to conquer the world except a grasp of basic geography. Learn country names, trivia, capitals, and flags as you achieve world domination!"}
            boxArt={data.boxArt.childImageSharp.fluid}
            name={"Forgetful Dictator"}
            link={"https://store.steampowered.com/app/1087810/Forgetful_Dictator/"} target="_blank" rel="noopener noreferrer" />
    )
}