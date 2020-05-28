import React from "react";
import Img from "gatsby-image";
import { SocialLink } from "./sociallinks";
import "../style/profile.less";

export default ({ name, promoLinks, image, rounded }) => {
    let linksList = [];
    promoLinks.forEach(function (e, i) {
        linksList.push(<SocialLink key={e.url + "-" + e.icon + "-" + i} data={e} />);
    });
    return (
        <div className={`profile`}>
            <div className="image-container-wrapper">
                <div className={`image-container ${rounded ? "rounded" : ""}`}>
                    <Img src={image} alt={name + " profile image."} fluid={image.childImageSharp.fluid} />
                </div>
            </div>
            <div className="s12 m6">
                <p className="text-secondary author-title"><b>{name}</b></p>
                <div className="social-list-outter">
                    <div className="social-links">
                        {linksList}
                    </div>
                </div>
            </div>
        </div >
    )
}