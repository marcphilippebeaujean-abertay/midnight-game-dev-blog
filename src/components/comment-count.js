import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { CommentCount } from "gatsby-plugin-disqus"


export default ({ title, location }) => (
    <StaticQuery query={(
        graphql`
                query {
                    site {
                        siteMetadata {
                            siteUrl
                            disqus
                        }
                    }
                }
            `
    )}
        render={data => {
            const url = data.site.siteMetadata.siteUrl + location;
            const disqusConfig = {
                url,
                identifier: title,
                title
            };
            return <CommentCount config={disqusConfig} placeholder={`?`} />
        }}
    />
)