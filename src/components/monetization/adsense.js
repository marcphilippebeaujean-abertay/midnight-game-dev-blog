import React from "react";
import AdSense from 'react-adsense';
import { useStaticQuery, graphql } from "gatsby";


export default () => {
    const data = useStaticQuery(graphql`
        query AdSense {
            site {
                siteMetadata {
                    adSense {
                        client
                        slot
                    }
                }
            }
        }
    `);

    return (
        <div className="adwords-side-banner">
            <AdSense.Google
                client={data.site.siteMetadata.adSense.client}
                slot={data.site.siteMetadata.adSense.slot}
            />
        </div>
    )
}