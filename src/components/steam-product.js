import React from "react";
import Img from "gatsby-image";
import ComponentWrapper from "./component-wrapper";

const SteamComponent = ({ description, name, boxArt, link }) => (
    <ComponentWrapper>
        <div className="steam-component">
            <div className="steam-header-wrapper">
                <div className="game-header-wrapper">
                    <h4>{name}</h4>
                </div>
                <div className="icon-wrapper">
                    <img src={"/images/Steam.svg"} className="icon" alt="Steam Icon" />
                </div>
            </div>
            <div className="row">
                <p>
                    <div className="box-art-wrapper">
                        <Img fluid={boxArt} alt={name + " box art"} />
                    </div>
                    {description}
                </p>
            </div>
            <a href={link}>
                <div className="price-tag">
                    <div>
                        <p>View on Steam</p>
                    </div>
                </div>
            </a>
        </div>
    </ComponentWrapper>
)

export default SteamComponent;