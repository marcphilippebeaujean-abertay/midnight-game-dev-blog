import React from "react";
import LazyLoad from 'react-lazy-load';
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import Banner from "../components/banner";
import SEO from "../components/seo";
import SocialLinks from "../components/sociallinks";
import Newsletter from "../components/newsletter";
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
                />
                <div
                    className="wall"
                >
                    <div className="intro container">
                        <div className="banner-wrapper text-primary">
                            <Banner />
                        </div>
                        <p className="tag-line text-secondary">
                            {this.props.data.site.siteMetadata.description}
                        </p>
                        <p className="caption">
                            Read the <Link to={"/blog"}>Blog</Link>, listen to
                            the <Link to={"/podcast"}>Podcast</Link> or join the
                            <a href="https://discord.gg/DHEgFx" target="_blank" rel="noopener noreferrer"> Discord Community</a>.
                        </p>
                        <Newsletter />
                    </div>
                    <div className="social-buttons">
                        <SocialLinks />
                    </div>
                </div>
                <LazyLoad offsetVertical={500}>
                    <BlogList />
                </LazyLoad>
                <Contact />
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
