import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import SEO from "../components/seo";
import SectionTitle from "../components/sectiontitle";
import { MDXRenderer } from "gatsby-plugin-mdx"
import "../style/basepage.less";

export default function ({ data }) {
    return (
        <Layout>
            <SEO
                lang="en"
                title={data.mdx.frontmatter.title}
                description={data.mdx.frontmatter.description}
            />
            <section className="container">
                <div className="section-title">
                    <SectionTitle
                        title={data.mdx.frontmatter.title.toUpperCase()}
                    />
                </div>
                <article className="post">
                    <div className="content row flex">
                        {data.mdx.frontmatter.image && (
                            <div className="center">
                                <div className="img">
                                    <Img
                                        fluid={
                                            data.mdx.frontmatter
                                                .image.childImageSharp.fluid
                                        }
                                    />
                                </div>
                            </div>
                        )}
                        <div
                            className="center col s12 m11 l10"
                            style={{ margin: "auto" }}
                        ><MDXRenderer>{data.mdx.body}</MDXRenderer></div>
                    </div>
                </article>
            </section>
        </Layout>
    );
}

export const query = graphql`
    query($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title
                description
                image {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 1920) {
                            srcSet
                            ...GatsbyImageSharpFluid
                        }
                        id
                    }
                }
            }
        }
    }
`;
