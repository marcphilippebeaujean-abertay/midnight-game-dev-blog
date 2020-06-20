import React from "react";

import Categories from "./category-display";
import { Tag, Download, User, Construction } from "./icons";


const AssetListItem = ({ data }) => (
    <div className="asset-item">
        <div>
            <a href={data.node.frontmatter.external_link} target="_blank" rel="noopener noreferrer">
                <p>
                    <span className="icon icon-offset">
                        <Download />
                    </span>
                    <b>{data.node.frontmatter.title}</b>
                </p>
            </a>
        </div>
        <div>
            <p><span className="icon icon-offset"><User /></span>{data.node.frontmatter.externals_profile.name}</p>
        </div>
        <div className="tags-container">
            <p>
                <span className="icon">
                    <Tag />
                </span>
                <Categories categories={data.node.frontmatter.category} type={"free-assets"} />
            </p>
        </div>
        <div>
            <p><span className="icon icon-offset"><Construction /></span>{data.node.frontmatter.related_engine}</p>
        </div>
    </div>
)

export default ({ datas }) => {
    const data = datas.allMdx.edges;
    console.log(data);
    let items = [];
    data.forEach(function (e, i) {
        items.push(<AssetListItem key={e.node.id} data={e} />);
    });

    return (
        <div className="asset-table">
            {items}
            <div className="asset-item" />
        </div>)
}