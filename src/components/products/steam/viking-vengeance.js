import React from "react";
import SteamComponent from "../../steam-product";
import { useStaticQuery, graphql } from "gatsby";


export default () => {
    const data = useStaticQuery(graphql`
        query VikingVengeance {
            boxArt: file(relativePath: { eq: "games_boxart/viking-vengeance.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <SteamComponent description={"Use the Norse Gods to stop the Templar Oppression in this narrative-driven rogue-lite dungeon crawler. Turn into avatars of Gods during battles and wield Thor’s hammer, use Loki's mischief skills or Odin's power to crush your enemies."}
            boxArt={data.boxArt.childImageSharp.fluid}
            name={"Viking Vengeance"}
            link={"https://store.steampowered.com/app/1082890/Viking_Vengeance/"} target="_blank" rel="noopener noreferrer" />
    )
}