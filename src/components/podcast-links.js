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


export const PodcastLinks = ({ title, applePodcastLink, googlePodcastLink, spotifyLink, rssLink, websiteLink }) => {
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
        <div>            {title && <h2 className="podcast-header">{title}</h2>}
            <div className="podcast-links social-links">
                {applePodcastLink && <LinkButton iconImage={data.applePodcast.childImageSharp.fluid} name={"Apple Podcast"} url={applePodcastLink} />}
                {googlePodcastLink && <LinkButton iconImage={data.googlePodcast.childImageSharp.fluid} name={"Google Podcast"} url={googlePodcastLink} />}
                {spotifyLink && <LinkButton iconImage={data.spotifyIcon.childImageSharp.fluid} name={"Spotify"} url={spotifyLink} />}
                {rssLink &&
                    <LinkButton iconImage={data.rssIcon.childImageSharp.fluid} name={"RSS Feed"} url={rssLink} />}
            </div>
        </div>

    )
}

export default () => <PodcastLinks applePodcastLink={"https://podcasts.apple.com/de/podcast/moonlight-game-devs/id1511553688"}
    googlePodcastLink={"https://podcasts.google.com/?feed=aHR0cHM6Ly9sZXRzY2FzdC5mbS9wb2RjYXN0cy9tb29ubGlnaHQtZ2FtZS1kZXZzLTEzNDViYTAxL2ZlZWQ&ep=14"}
    spotifyLink={"https://open.spotify.com/show/6aDR2KdCiwPoSySMphy2Ha?si=1Ct3IZSZRWCR4GwqGT_ltg"}
    rssLink={"https://letscast.fm/podcasts/moonlight-game-devs-1345ba01/feed"} />


