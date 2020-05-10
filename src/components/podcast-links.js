import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "../style/podcast-links.less";

const LinkButton = ({ iconImage, url, name }) => (
    <div className="pod-link-wrapper">
        <a href={url} title={name} target="_blank" rel="noopener noreferrer">
            <Img fluid={iconImage} alt={name} />
        </a>
    </div>
)

export default () => {
    const data = useStaticQuery(graphql`
        query {
            applePodcast: file(relativePath: { eq: "podcast_icons/apple_podcast.png" }) {
                childImageSharp {
                    fluid(maxWidth: 40) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            googlePodcast: file(relativePath: { eq: "podcast_icons/google-podcast.png" }) {
                childImageSharp {
                    fluid(maxWidth: 40) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            spotifyIcon: file(relativePath: { eq: "podcast_icons/spotify.png" }) {
                childImageSharp {
                    fluid(maxWidth: 40) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            rssIcon: file(relativePath: { eq: "podcast_icons/rss.png" }) {
                childImageSharp {
                    fluid(maxWidth: 40) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <div className="podcast-links social-links">
            <LinkButton iconImage={data.applePodcast.childImageSharp.fluid} name={"Apple Podcast"} url={"https://podcasts.apple.com/de/podcast/moonlight-game-devs/id1511553688"} />
            <LinkButton iconImage={data.googlePodcast.childImageSharp.fluid} name={"Google Podcast"} url={"https://podcasts.google.com/?feed=aHR0cHM6Ly9sZXRzY2FzdC5mbS9wb2RjYXN0cy9tb29ubGlnaHQtZ2FtZS1kZXZzLTEzNDViYTAxL2ZlZWQ&ep=14"} />
            <LinkButton iconImage={data.spotifyIcon.childImageSharp.fluid} name={"Spotify"} url={"https://open.spotify.com/show/6aDR2KdCiwPoSySMphy2Ha?si=1Ct3IZSZRWCR4GwqGT_ltg"} />
            <LinkButton iconImage={data.rssIcon.childImageSharp.fluid} name={"RSS Feed"} url={"https://letscast.fm/podcasts/moonlight-game-devs-1345ba01/feed"} />
        </div>
    )
}


