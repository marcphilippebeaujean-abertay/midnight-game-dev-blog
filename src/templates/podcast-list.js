import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PodcastItems from "../components/items-preview";
import Pagination from "../components/pagination";
import SEO from "../components/seo";

class PodcastList extends React.Component {
    render() {
        const query = this.props.datas;
        if (query.allMdx.edges.length > 0) {
            return (
                <section id="podcasts" className="container">
                    <div className="section-title">
                        <h1>PODCAST</h1>
                    </div>
                    <PodcastItems data={query} />
                    <Pagination
                        pageContext={this.props.pageContext}
                        type="podcast"
                    />
                </section>
            );
        }
        return null;
    }
}

export default function ({ data, pageContext }) {
    return (
        <Layout>
            <SEO lang="en" title="Podcast" description="List of Moonlight Game Devs Podcast Episodes" />
            <PodcastList datas={data} pageContext={pageContext} />
        </Layout>
    );
}

export const query = graphql`
    query podcastEpisodeListPage($skip: Int!, $limit: Int!) {
        allMdx(
            filter: { fileAbsolutePath: { regex: "/podcast/" } }
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
                        date
                        category
                        image {
                            publicURL
                            childImageSharp {
                                fluid(maxWidth: 600) {
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
