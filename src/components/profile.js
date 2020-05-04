import React from "react";
import { SocialLink } from "./sociallinks";
import "../style/profile.less";

export default ({ name, promoLinks, image, rounded }) => {
    let linksList = [];
    promoLinks.forEach(function (e, i) {
        linksList.push(<SocialLink key={e.url + "-" + e.icon + "-" + i} data={e} />);
    });
    return (
        <div className={`profile`}>
            <div className="row">
                <div className="col s12 m4 image-container">
                    <img src={image} alt={name + " profile image."} className={rounded !== undefined ? "rounded" : ""} />
                </div>
                <div className="col s12 m8">
                    <h4>{name}</h4>
                    <div className="social-list-outter">
                        <div className="social-links">
                            {linksList}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}