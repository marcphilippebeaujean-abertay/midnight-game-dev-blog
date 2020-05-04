import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BlogItems from "./items-blog";

export default function (props) {
    const query = useStaticQuery(graphql`
        query latestBlogList {
            allMdx(
                filter: { fileAbsolutePath: { regex: "/blog/" } }
                limit: 3
                sort: { fields: [frontmatter___date], order: DESC }
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            description
                            date
                            image {
                                publicURL
                                childImageSharp {
                                    fluid(maxWidth: 400) {
                                        srcSet
                                        ...GatsbyImageSharpFluid
                                    }
                                    id
                                }
                            }
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);
    if (query.allMdx.edges.length > 0) {
        return (
            <section id="latest-blogposts" className="container">
                <div className="section-title">
                    <h2>Latest Blogposts</h2>
                </div>
                <BlogItems data={query} remove={props.id} itemDimensionClassNames={"s12 m6 l6"} />
            </section>
        );
    } else {
        return <React.Fragment></React.Fragment>;
    }
}
