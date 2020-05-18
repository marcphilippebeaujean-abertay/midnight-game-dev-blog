import React from "react";
import LazyLoad from 'react-lazy-load';
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import LatestPosts from "../components/blogposts-latest";
import SEO from "../components/seo";
import Date from "../components/date";
import Comments from "../components/comments";
import PodcastLinks from "../components/podcast-links";
import Profile from "../components/profile";
import PodlovePlayer from "../components/podlove-player";
import Categories from "../components/category-display";
import { MDXRenderer } from "gatsby-plugin-mdx"
import "../style/blog-singlepage.less";

export default function ({ data, location }) {
    return (
        <Layout>
            <SEO
                lang="en"
                title={data.mdx.frontmatter.title}
                description={data.mdx.frontmatter.description}
                image={data.mdx.frontmatter.image.publicURL}
            />
            <div className="container">
                <article className="blog-post">
                    {data.mdx.frontmatter.banner != null && (
                        <div className="banner">
                            <Img
                                fluid={
                                    data.mdx.frontmatter.banner
                                        .childImageSharp.fluid
                                }
                            />
                        </div>
                    )}
                    <div className="head text-primary">
                        <h1>{data.mdx.frontmatter.title}</h1>
                        <p className="post-date">
                            <Date data={data.mdx.frontmatter.date} />
                        </p>
                    </div>
                    {data.mdx.frontmatter.category != null &&
                        <div className="m-center tags-container">
                            <Categories categories={data.mdx.frontmatter.category} />
                        </div>
                    }
                    {
                        data.mdx.frontmatter.podcast_player != null && (
                            <div>
                                <PodcastLinks podcast_links={data.mdx.frontmatter.podcast_links} />
                            </div>
                        )
                    }
                    <div className="content row flex">
                        <div className="col s12 m11 l10">
                            {
                                data.mdx.frontmatter.podcast_player != null && (
                                    <div>
                                        <PodlovePlayer id={data.mdx.frontmatter.podcast_player.id}
                                            src={data.mdx.frontmatter.podcast_player.src} />
                                    </div>
                                )
                            }
                            <MDXRenderer>{data.mdx.body}</MDXRenderer>
                        </div>
                    </div>
                    {
                        data.mdx.frontmatter.externals_profile != null && (
                            <Profile name={data.mdx.frontmatter.externals_profile.name}
                                image={data.mdx.frontmatter.externals_profile.image}
                                promoLinks={data.mdx.frontmatter.externals_profile.links}
                                description={data.mdx.frontmatter.externals_profile.description} />
                        )
                    }
                </article>
                <LazyLoad offsetVertical={300}>
                    <Comments
                        title={data.mdx.frontmatter.title}
                        location={location.pathname}
                    />
                </LazyLoad>
                <LatestPosts id={data.mdx.id} />
            </div>
        </Layout>
    );
}

export const query = graphql`
    query($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            id
            frontmatter {
                title
                date
                category
                description
                podcast_player {
                    id
                    src                    
                }
                externals_profile {
                    image {
                        childImageSharp {
                            fluid(maxWidth: 100) {
                                srcSet
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    name
                    links {
                        icon
                        name
                        url
                    }
                }
                image {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 450) {
                            srcSet
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                banner {
                    publicURL
                    childImageSharp {
                        fluid(maxHeight: 600, maxWidth: 1920) {
                            srcSet
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`;
