import React from "react";
import Img from "gatsby-image";
import ComponentWrapper from "./component-wrapper";
import "../style/products.less";

export default ({ name, image, link, price }) => {
    return (
        <ComponentWrapper>
            <div className="affiliate-block">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <div className="p-row">
                        <div className="product-logo-wrapper">
                            <Img fluid={image} />
                        </div>
                        <div className="product-info">
                            <p><b>{name}</b></p>
                            <small className="text-secondary"><b>*This is an affiliate link. Any purchases made on the website award the publisher a commission at no additional cost to you.</b></small>
                        </div>
                    </div>
                </a>
                <div className="price-tag">
                    <p>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <b>{`${price}$`}</b>
                        </a>
                    </p>
                </div>
            </div>
        </ComponentWrapper>
    )
}