import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import LatestPosts from "../components/blogposts-latest";
import SEO from "../components/seo";
import Date from "../components/date";
import Comments from "../components/comments";
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
                    <div className="content row flex">
                        <div className="col s12 m11 l10">
                            <MDXRenderer>{data.mdx.body}</MDXRenderer>
                        </div>
                    </div>
                </article>
                <Comments
                    title={data.mdx.frontmatter.title}
                    location={location.pathname}
                />
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
                description
                image {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            srcSet
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                banner {
                    publicURL
                    childImageSharp {
                        fluid(maxHeight: 600, maxWidth: 1920) {
                            srcSet
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;
