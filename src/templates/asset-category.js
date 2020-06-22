import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import AssetTable from "../components/asset-table";
import Pagination from "../components/pagination";
import SEO from "../components/seo";

class AssetList extends React.Component {
    render() {
        const query = this.props.datas;
        if (query.allMdx.edges.length > 0) {
            return (
                <section id="assets" className="container">
                    <div className="section-title">
                        <header><h1>{"FREE " + this.props.pageContext.category.toUpperCase() + " GAME ASSETS"}</h1></header>
                    </div>
                    <AssetTable datas={query} />
                    <Pagination
                        pageContext={this.props.pageContext}
                        type={`free-assets/category/${this.props.pageContext.category}`}
                    />
                </section>
            );
        } else {
            return <React.Fragment></React.Fragment>;
        }
    }
}

export default function ({ data, pageContext }) {
    let description = `List of Currated ${pageContext.category} Game Assets!`;
    return (
        <Layout>
            <SEO lang="en" title={`Free ${pageContext.category} Game Assets`} description={description} />
            <AssetList datas={data} pageContext={pageContext} />
        </Layout>
    );
}

export const query = graphql`
    query assetCategoryListPage($skip: Int!, $limit: Int!, $category: String) {
        allMdx(
            filter: { frontmatter: { category: { in: [$category] } }, fileAbsolutePath: { regex: "/assets/" } }
            sort: { fields: [frontmatter___date], order: DESC }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date
                        description
                        category
                        external_link
                        related_engine
                        externals_profile {
                            name
                        }
                    }
                }
            }
        }
    }
`;
