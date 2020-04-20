const siteMetadata = {
    title: `Moonlight Game Dev`,
    siteUrl: `http://localhost`,
    capitalizeTitleOnHome: true,
    logo: `/images/logo.png`,
    icon: `/images/icon.png`,
    titleImage: `/images/logo-banner.png`,
    description: `Discussions, Guides and Interviews for Indie Game Developers.`,
    author: `Marc Philippe Beaujean`,
    blogItemsPerPage: 10,
    podcastEpisodesPerPage: 10,
    darkmode: true,
    navLinks: [
        {
            name: "HOME",
            url: "/"
        },
        {
            name: "ABOUT",
            url: "/about"
        },
        {
            name: "BLOG",
            url: "/blog"
        },
        {
            name: "PODCAST",
            url: "/podcast"
        },
        {
            name: "CONTACT",
            url: "/contact"
        }
    ],
    footerLinks: [
        {
            name: "PRIVACY POLICY",
            url: "/privacy-policy"
        },
        {
            name: "DATENSCHUTZ UND IMPRESSUM",
            url: "/impressum-datenschutz"
        }
    ],
    social: [
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "https://twitter.com/MarcBeaujean"
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "https://www.instagram.com/mpbeauj/"
        },
        {
            name: "Youtube",
            icon: "/images/Youtube.svg",
            url: "https://www.youtube.com/channel/UCrGAw9i5HoaByeiQAV5FaLA"
        },
        {
            name: "Discord",
            icon: "/images/Discord.svg",
            url: "https://discord.gg/DHEgFx"
        }
    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        api_url: "./test.json",
        description: `Whatever the reason, I'd love to hear from you!`
    },
    newsletter: {
        api_url: "./newsletter.json"
    },
    // this is optional. you can uncomment this if you use disqus
    disqus: `moonlightgamedev`
};

const plugins = [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: [
                "gatsby-remark-copy-linked-files",
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 1280
                    }
                },
                {
                    resolve: `gatsby-remark-highlight-code`
                }
            ]
        }
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `contents`,
            path: `${__dirname}/contents/`
        }
    },
    {
        resolve: `gatsby-plugin-less`,
        options: {
            strictMath: true
        }
    },
    `gatsby-image`,
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `images`,
            path: `${__dirname}/static/images`,
        },
    },
];

if (siteMetadata.disqus) {
    plugins.push({
        resolve: `gatsby-plugin-disqus`,
        options: {
            shortname: siteMetadata.disqus
        }
    });
}

module.exports = {
    siteMetadata: siteMetadata,
    plugins: plugins
};
