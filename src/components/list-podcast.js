import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Items from "./items-preview";

export default function () {
    const query = useStaticQuery(graphql`
        query podcastList {
            allMdx(
                filter: { fileAbsolutePath: { regex: "/podcast/" } }
                limit: 6
                sort: { fields: [frontmatter___date], order: DESC }
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            description
                            category
                            date
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
            <section id="podcast" className="container">
                <div className="section-title">
                    <h2>PODCAST</h2>
                </div>
                <Items data={query} />
            </section>
        );
    } else {
        return <React.Fragment></React.Fragment>;
    }
}
