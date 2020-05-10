import React from "react";
import { navigateTo } from "gatsby";
import kebabCase from "kebab-case"
import "../style/category-tags.less"

export default ({ categories }) => {
    if (categories === null) return;

    return categories.length > 0 ? (
        <React.Fragment>
            {
                categories.map(cat => <span className="btn tag" onClick={() => {
                    const categorySlug = kebabCase(cat);
                    const link = `/category/${categorySlug.slice(1)}`
                    navigateTo(link);
                }}>{cat}</span>)
            }</React.Fragment>
    ) : null
}