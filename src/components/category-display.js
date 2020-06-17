import React from "react";
import { Link } from "gatsby";
import kebabCase from "kebab-case"
import "../style/category-tags.less"

export default ({ categories, type }) => {
    if (categories === null) return;

    const categoryLinks = [];

    categories.forEach(cat => {
        const categorySlug = kebabCase(cat);
        const link = `${type}/category/${categorySlug.slice(1)}`
        categoryLinks.push(<Link className="btn tag" to={link}>{cat}</Link>)
    })

    return categories.length > 0 ? (
        <React.Fragment>
            {
                categoryLinks
            }</React.Fragment>
    ) : null
}