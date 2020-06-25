import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import { SocialLink } from "./sociallinks";
import "../style/profile.less";

const Profile = ({ name, promoLinks, image, rounded }) => {
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

export const MyProfile = () => {
    const data = useStaticQuery(graphql`
        query PersonalPic {
            myPic: file(relativePath: { eq: "personal-pic.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 150) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <Profile name={"Marc Philippe Beaujean"}
            promoLinks={
                [{
                    url: "https://twitter.com/MarcBeaujean",
                    icon: "/images/Twitter.svg",
                    name: "Twitter"
                },
                {
                    url: "https://www.linkedin.com/in/marc-philippe-beaujean-5ab27815a/",
                    icon: "/images/Linkedin.svg",
                    name: "Linkedin"
                },
                {
                    website: "https://byteschool.io/",
                    icon: "/images/Website.svg",
                    name: "Website"
                }
                ]}
            rounded={true}
            image={data.myPic} />
    )
}

export default Profile;