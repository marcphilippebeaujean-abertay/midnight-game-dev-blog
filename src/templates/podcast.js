import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Date from "../components/date";
import { MDXRenderer } from "gatsby-plugin-mdx"
import "../style/podcast-singlepage.less";


export default function ({ data }) {
    return (
        <Layout>
            <SEO
                lang="en"
                title={data.mdx.frontmatter.title}
                description={data.mdx.frontmatter.description}
                image={data.mdx.frontmatter.image.publicURL}
            />
            <div className="container">
                <article className="podcast-post">
                    <div className="head text-primary">
                        <h1>{data.mdx.frontmatter.title}</h1>
                        <p className="post-date">
                            <Date data={data.mdx.frontmatter.date} />
                        </p>
                    </div>
                    <div className="content row flex">
                        <div className="col s12">
                            <MDXRenderer>{data.mdx.body}</MDXRenderer>
                        </div>
                    </div>
                </article>
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
                        fluid(maxWidth: 300) {
                            srcSet
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;
