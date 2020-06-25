import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Newsletter from "../components/newsletter";
import Pagination from "../components/pagination";
import AssetTable from "../components/asset-table";
import Categories from "../components/category-display";
import { Tag } from "../components/icons";
import SEO from "../components/seo";

import "../style/asset-list.less"

class AssetList extends React.Component {
    render() {
        const query = this.props.datas;
        if (query.allMdx.edges.length > 0) {
            return (
                <section id="assets" className="container">
                    <div className="section-title">
                        <header><h1>FREE ASSETS</h1></header>
                    </div>
                    {
                        this.props.pageContext.isFirstAssetPage && (
                            <div className="asset-listing-description">
                                <p className="tag-line text-secondary">A curated List of the best free Game Assets!</p>
                                <p className="text-secondary"><span className="icon"><Tag /></span>Categories</p>
                                <div className="tags-container">
                                    {
                                        <Categories categories={this.props.pageContext.assetCategoriesToDisplay} type={"free-assets"} />
                                    }
                                </div>
                                <p className="caption">Updated weekly - subscribe so you don't miss new Listings.</p>
                                <Newsletter />
                            </div>)
                    }
                    <AssetTable datas={query} />
                    <Pagination
                        pageContext={this.props.pageContext}
                        type="free-assets"
                    />
                </section>
            );
        } else {
            return (<section id="assets" className="container">
                <div className="section-title">
                    <header><h1>FREE ASSETS</h1></header>
                </div>
                <div className="asset-listing-description">
                    <p className="tag-line text-secondary">A currated List of the best free Game Assets!</p>
                    <p className="caption">Updated weekly - subscribe so you don't miss new Listings.</p>
                    <Newsletter />
                </div>
            </section>)
        }
    }
}

export default function ({ data, pageContext }) {
    let description = `Currated List of free Game Assets`;
    let title = "Free Assets"
    if (pageContext.category !== undefined) {
        description = `Currated List of free ${pageContext.category} Game Assets`;
        title = "Free " + pageContext.category + " Assets";
    }
    return (
        <Layout>
            <SEO lang="en" title={title} description={description} />
            <AssetList datas={data} pageContext={pageContext} />
        </Layout>
    );
}

export const query = graphql`
    query assetListPage($skip: Int!, $limit: Int!) {
        allMdx(
            filter: { fileAbsolutePath: { regex: "/assets/" } }
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
