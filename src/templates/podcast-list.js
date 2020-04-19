import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SectionTitle from "../components/sectiontitle";
import PodcastItems from "../components/items-podcast";
import Pagination from "../components/pagination";
import NewsletterForm from "../components/newsletter";
import { Link } from "gatsby";
import SEO from "../components/seo";

class PodcastList extends React.Component {
    render() {
        const query = this.props.datas;
        if (query.allMarkdownRemark.edges.length > 0) {
            return (
                <section id="podcasts" className="container">
                    <div className="section-title">
                        <SectionTitle title="PODCASTS" />
                    </div>
                    <PodcastItems data={query} />
                    <Pagination
                        pageContext={this.props.pageContext}
                        type="podcast"
                    />
                </section>
            );
        } else {
            return (
                <section id="podcasts" className="container">
                    <div className="section-title">
                        <SectionTitle title="PODCAST" />
                    </div>
                    <p className="text-center">
                        The Podcast is still under Development. Want to get
                        informed when its released? Subscribe to the
                        Newsletter!
                        </p>
                    <NewsletterForm />
                    <p className="text-center">
                        Are you an indie game developer?{" "}
                        <Link to="/contact">
                            I'd love to hear from you!
                            </Link>
                    </p>
                </section>
            );
        }
    }
}

export default function ({ data, pageContext }) {
    return (
        <Layout>
            <SEO lang="en" title="Podcast" />
            <PodcastList datas={data} pageContext={pageContext} />
        </Layout>
    );
}

export const query = graphql`
    query podcastEpisodeListPage($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
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
                    fields {
                        slug
                    }
                }
            }
        }
    }
`;
