import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BlogItems from "./items-preview";
import LazyLoad from "react-lazy-load";

export default function (props) {
    const query = useStaticQuery(graphql`
        query latestBlogList {
            allMdx(
                filter: { fileAbsolutePath: { regex: "/blog/" } }
                limit: 2
                sort: { fields: [frontmatter___date], order: DESC }
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            description
                            date
                            category
                            image {
                                publicURL
                                childImageSharp {
                                    fluid(maxWidth: 400) {
                                        srcSet
                                        ...GatsbyImageSharpFluid_withWebp
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
            <LazyLoad offsetVertical={500}>
                <section id="latest-blogposts" className="container">
                    <div className="section-title">
                        <h2>Latest Blogposts</h2>
                    </div>
                    <BlogItems data={query} remove={props.id} itemDimensionClassNames={"s12 m6 l6"} />
                </section>
            </LazyLoad>
        );
    } else {
        return <React.Fragment></React.Fragment>;
    }
}
