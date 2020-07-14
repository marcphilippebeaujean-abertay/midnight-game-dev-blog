const siteMetadata = {
    title: `Moonlight Game Devs`,
    siteUrl: `https://moonlightgamedevs.com`,
    capitalizeTitleOnHome: true,
    logo: `/images/logo.png`,
    icon: `/images/icon.svg`,
    browserPreviewIcon: `/images/browserPreviewIcon.png`,
    titleImage: `/images/logo-banner.png`,
    description: `Where Game Developers share their Stories, Guides and Lessons learned.`,
    author: `Marc Philippe Beaujean`,
    gridItemsPerPage: 12,
    tableItemsPerPage: 15,
    darkmode: true,
    adSense: {
        client: "ca-pub-9029972083545782",
        slot: "6253304410"
    },
    navLinks: [
        {
            name: "HOME",
            url: "/"
        },
        {
            name: "FREE ASSETS",
            url: "/free-assets"
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
            url: "https://twitter.com/devs_moonlight"
        },
        {
            name: "Youtube",
            icon: "/images/Youtube.svg",
            url: "https://www.youtube.com/channel/UCrGAw9i5HoaByeiQAV5FaLA"
        },
        {
            name: "Discord",
            icon: "/images/Discord.svg",
            url: "https://discord.gg/rfcYJJB"
        },
        {
            name: "Facebook",
            icon: "/images/Facebook.svg",
            url: "https://www.facebook.com/Moonlight-Game-Devs-117297853384521"
        },
        {
            name: "Reddit",
            icon: "/images/Reddit.svg",
            url: "https://www.reddit.com/r/MoonlightGameDevs"
        }
    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        api_url: "./test.json",
        description: `Whatever the reason, I'd love to hear from you!`
    },
    // this is optional. you can uncomment this if you use disqus
    disqus: `moonlightgamedev`
};

const plugins = [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
        resolve: `gatsby-plugin-mdx`,
        options: {
            extensions: ['.mdx', '.md'],
            gatsbyRemarkPlugins: [
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 800
                    },
                },
                {
                    resolve: `gatsby-remark-highlight-code`,
                },
                {
                    resolve: `gatsby-remark-lazy-load`,
                }
            ],
            plugins: [`gatsby-remark-images`],
        },
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
    /*{
        resolve: `gatsby-plugin-purgecss`,
        options: {
            printRejected: true, // Print removed selectors and processed file names
            develop: true, // Enable while using `gatsby develop`
            // tailwind: true, // Enable tailwindcss support
            // whitelist: ['whitelist'], // Don't remove this selector
            // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
            // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
        }
    },*/
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
            // The property ID; the tracking code won't be generated without it
            trackingId: "UA-153657097-3",
            // Defines where to place the tracking script - `true` in the head and `false` in the body
            head: false,
            // Setting this parameter is optional
            anonymize: true,
            // Setting this parameter is also optional
            respectDNT: true,
            // Delays sending pageview hits on route update (in milliseconds)
            pageTransitionDelay: 1000,
            // Defers execution of google analytics script after page load
            defer: true,
        },
    },
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt'
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
