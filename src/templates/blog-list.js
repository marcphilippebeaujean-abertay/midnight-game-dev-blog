import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import BlogItems from "../components/items-preview";
import SectionTitle from "../components/sectiontitle";
import Pagination from "../components/pagination";
import SEO from "../components/seo";

class BlogList extends React.Component {
    render() {
        const query = this.props.datas;
        if (query.allMdx.edges.length > 0) {
            return (
                <section id="blog" className="container">
                    <div className="section-title">
                        <SectionTitle title="BLOG" />
                    </div>
                    <BlogItems data={query} />
                    <Pagination
                        pageContext={this.props.pageContext}
                        type="blog"
                    />
                </section>
            );
        } else {
            return <React.Fragment></React.Fragment>;
        }
    }
}

export default function ({ data, pageContext }) {
    return (
        <Layout>
            <SEO lang="en" title={pageContext.category} />
            <BlogList datas={data} pageContext={pageContext} />
        </Layout>
    );
}

export const query = graphql`
    query blogListPage($skip: Int!, $limit: Int!) {
        allMdx(
            filter: { fileAbsolutePath: { regex: "/blog/" } }
            sort: { fields: [frontmatter___date], order: DESC }
            limit: $limit
            skip: $skip
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
                                fluid(maxWidth: 450) {
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
`;
