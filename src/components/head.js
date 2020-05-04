import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function Header() {
    const query = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    darkmode
                    icon
                }
            }
        }
    `);
    return (
        <Helmet>
            <link
                rel="icon"
                href={query.site.siteMetadata.icon}
                type="image/png"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdn.jsdelivr.net/gh/akzhy/trunk/dist/trunk.min.css"
            />
            <link
                d href="https://fonts.googleapis.com/css?family=Work+Sans:800|Poppins&display=swap"
                rel="stylesheet"
            />
            <link
                rel="alternate"
                type="application/rss+xml"
                title="Moonlight Game Devs"
                href="https://letscast.fm/podcasts/moonlight-game-devs-1345ba01/feed">
            </link>
        </Helmet>
    );
}

export default Header;
