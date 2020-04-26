import React from "react";
import { ListItem } from "./sociallinks";

export default ({ name, promoLinks }) => {
    let linksList = [];
    promoLinks.forEach(function (e, i) {
        linksList.push(<ListItem key={e.url + "-" + e.icon + "-" + i} data={e} />);
    });
    return (
        <div>
            <h4>{name}</h4>
            <ul className="social-links">{linksList}</ul>
        </div>
    )
}