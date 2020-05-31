import React from "react";
import LazyLoad from 'react-lazy-load';
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import Banner from "../components/banner";
import SEO from "../components/seo";
import SocialLinks from "../components/sociallinks";
import Newsletter from "../components/newsletter";
import PodcastList from "../components/list-podcast";
import BlogList from "../components/list-blog";
import Contact from "../components/contact";
import "../style/wall.less";

class IndexPage extends React.Component {
    render() {
        return (
            <Layout placeholder={false}>
                <SEO
                    lang="en"
                    title={this.props.data.site.siteMetadata.title}
                    image={this.props.data.site.siteMetadata.publicURL}
                    description={this.props.data.site.siteMetadata.description}
                />
                <section
                    className="wall"
                >
                    <h1 style={{ position: "absolute", opacity: "0" }}>Moonlight Game Devs</h1>
                    <div className="intro container">
                        <div className="banner-wrapper text-primary">
                            <Banner />
                        </div>
                        <h1 hidden>Moonlight Game Devs</h1>
                        <p className="tag-line text-secondary">
                            {this.props.data.site.siteMetadata.description}
                        </p>
                        <p className="caption">
                            Read the <Link to={"/blog"}>Blog</Link>, listen to
                            the <Link to={"/podcast"}>Podcast</Link> or join the
                            <a href="https://discord.gg/DHEgFx" target="_blank" rel="noopener noreferrer"> Discord Community</a>.
                        </p>
                        <a href="https://www.producthunt.com/posts/moonlight-game-devs?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-moonlight-game-devs" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=204345&theme=light" alt="Moonlight Game Devs - Game Developers share their entrepreneurial Journey! | Product Hunt Embed" style={{ width: "250px", height: "54px", width: "250px", margin: "0 auto", height: "54px" }} /></a>
                        <Newsletter />
                    </div>
                    <div className="social-buttons">
                        <SocialLinks />
                    </div>
                </section>
                <PodcastList />
                <LazyLoad offsetVertical={500}>
                    <BlogList />
                </LazyLoad>
                <section>
                    <div className="section-title">
                        <h2>CONTACT</h2>
                    </div>
                    <Contact />
                </section>
            </Layout>
        );
    }
}

export default IndexPage;

export const query = graphql`
    query {
        logoBanner: file(relativePath: { eq: "logo-banner.png" }) {
            childImageSharp {
                fluid(maxWidth: 900) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        site {
            siteMetadata {
                title
                capitalizeTitleOnHome
                description
                social {
                    name
                    url
                icon
                }
            }
        }
    }
`;
