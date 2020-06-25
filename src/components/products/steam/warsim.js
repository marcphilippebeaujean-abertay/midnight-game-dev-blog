import React from "react";
import SteamComponent from "../../steam-product";
import { useStaticQuery, graphql } from "gatsby";


export default () => {
    const data = useStaticQuery(graphql`
        query Warsim {
            boxArt: file(relativePath: { eq: "games_boxart/warsim.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <SteamComponent description={"Warsim is a deep and rich text based kingdom management game unlike anything else. Complete with charming ASCII graphics, navigate the millions of different procedurally generated races, events and areas with a huge emphasis on player choice. Don't let its look fool you, there is depth in every direction."}
            boxArt={data.boxArt.childImageSharp.fluid}
            name={"Warsim: The Realm of Aslona"}
            link={"https://store.steampowered.com/app/659540/Warsim_The_Realm_of_Aslona/?beta=0"} target="_blank" rel="noopener noreferrer" />
    )
}