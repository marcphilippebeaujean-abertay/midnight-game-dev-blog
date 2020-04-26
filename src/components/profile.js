import React from "react";
import { ListItem } from "./sociallinks";
import "../style/profile.less";

export default ({ name, promoLinks, image }) => {
    let linksList = [];
    promoLinks.forEach(function (e, i) {
        linksList.push(<ListItem key={e.url + "-" + e.icon + "-" + i} data={e} />);
    });
    return (
        <div className="profile">
            <div className="row">
                <div className="col s12 m4">
                    <img src={image} alt={name + " profile image."} />
                </div>
                <div className="col s12 m8">
                    <h4>{name}</h4>
                    <div className="social-list-outter">
                        <ul>
                            <li className="social-margin">
                                <ul className="social-links">{linksList}</ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}