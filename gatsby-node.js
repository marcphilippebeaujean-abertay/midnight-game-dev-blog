const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);
const kebabCase = require('kebab-case');

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `Mdx`) {
        const slug = createFilePath({ node, getNode, basePath: `basepages` });
        createNodeField({
            node,
            name: `slug`,
            value: slug
        });
    }
};

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    const typeDefs = `
      type Site implements Node {
        siteMetadata: SiteMetaData
      }
      type SiteMetaData {
        disqus: String
      }
    `;
    createTypes(typeDefs);
};

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    /**/
    return graphql(`
        {
            blog: allMdx(
                filter: { fileAbsolutePath: { regex: "/blog/" } }
            ) {
                edges {
                    node {
                        frontmatter {
                            template
                            category
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
            podcast: allMdx(
                filter: { fileAbsolutePath: { regex: "/podcast/" } }
            ) {
                edges {
                    node {
                        frontmatter {
                            template
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
            assets: allMdx(
                filter: { fileAbsolutePath: { regex: "/assets/" } }
            ) {
                edges {
                    node {
                        frontmatter {
                            category
                        }
                    }
                }
            }
            basepages: allMdx(
                filter: { fileAbsolutePath: { regex: "/basepages/" } }
            ) {
                edges {
                    node {
                        frontmatter {
                            template
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
            limitPost: site {
                siteMetadata {
                    gridItemsPerPage
                    tableItemsPerPage
                }
            }
        }
    `).then(result => {
        const blogPosts = result.data.blog.edges;
        const blogPostsPerPage =
            result.data.limitPost.siteMetadata.gridItemsPerPage;
        const numBlogPages = Math.ceil(blogPosts.length / blogPostsPerPage);

        Array.from({ length: numBlogPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/blog` : `/blog/${i + 1}`,
                component: path.resolve("./src/templates/blog-list.js"),
                context: {
                    limit: blogPostsPerPage,
                    skip: i * blogPostsPerPage,
                    numPages: numBlogPages,
                    currentPage: i + 1
                }
            });
        });

        const blogCategories = [];
        blogPosts.forEach((post, index, arr) => {
            if (post.node.frontmatter.category != null) {
                post.node.frontmatter.category.forEach(cat => blogCategories.push(cat))
            }
        });

        const countblogCategories = blogCategories.reduce((prev, curr) => {
            prev[curr] = (prev[curr] || 0) + 1
            return prev
        }, {});
        const allblogCategories = Object.keys(countblogCategories)

        allblogCategories.forEach((cat, i) => {
            const categorySlug = kebabCase(cat);
            const link = `blog/category/${categorySlug.slice(1)}`
            const numPostsForCategory = Math.ceil(countblogCategories[cat] / blogPostsPerPage);

            Array.from({ length: numPostsForCategory }).forEach((_, i) => {
                createPage({
                    path: i === 0 ? link : `${link}/${i + 1}`,
                    component: path.resolve("./src/templates/blog-category.js"),
                    context: {
                        category: cat,
                        limit: blogPostsPerPage,
                        skip: i * blogPostsPerPage,
                        currentPage: i + 1,
                        numPages: Math.ceil(countblogCategories[cat] / blogPostsPerPage),
                    },
                })
            })
        })

        const assets = result.data.assets.edges;
        const assetsPerPage =
            result.data.limitPost.siteMetadata.tableItemsPerPage;
        const numAssetPages = Math.ceil(assets.length / assetsPerPage);

        const assetCategories = [];
        assets.forEach((asset, index, arr) => {
            if (asset.node.frontmatter.category != null) {
                asset.node.frontmatter.category.forEach(cat => assetCategories.push(cat))
            }
        });

        const countAssetCategories = assetCategories.reduce((prev, curr) => {
            prev[curr] = (prev[curr] || 0) + 1
            return prev
        }, {});
        const allAssetCategories = Object.keys(countAssetCategories)

        allAssetCategories.forEach((cat, i) => {
            let catUrl = cat;
            if (cat.startsWith(3)) {
                catUrl += "(Models / Animations)"
            } else if (cat.startsWith(2)) {
                catUrl += "(Sprites / Textures)";
            }
            const categorySlug = kebabCase(catUrl);
            const link = `free-assets/category/${categorySlug.slice(1)}`
            const numPostsForCategory = Math.ceil(countAssetCategories[cat] / assetsPerPage);

            Array.from({ length: numPostsForCategory }).forEach((_, i) => {
                createPage({
                    path: i === 0 ? link : `${link}/${i + 1}`,
                    component: path.resolve("./src/templates/asset-category.js"),
                    context: {
                        category: cat,
                        limit: assetsPerPage,
                        skip: i * assetsPerPage,
                        currentPage: i + 1,
                        numPages: Math.ceil(countAssetCategories[cat] / assetsPerPage),
                    },
                })
            })
        })

        Array.from({ length: numAssetPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/free-assets` : `/free-assets/${i + 1}`,
                component: path.resolve("./src/templates/asset-list.js"),
                context: {
                    limit: assetsPerPage,
                    skip: i * assetsPerPage,
                    numPages: numAssetPages,
                    currentPage: i + 1,
                    isFirstAssetPage: i === 0,
                    assetCategoriesToDisplay: i === 0 ? allAssetCategories : [],
                }
            });
        });

        const podcastEpisodes = result.data.podcast.edges;
        const gridItemsPerPage =
            result.data.limitPost.siteMetadata.gridItemsPerPage;
        const numPodcastEpisodes = Math.ceil(
            podcastEpisodes.length / gridItemsPerPage
        );

        Array.from({ length: numPodcastEpisodes }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/podcast` : `/podcast/${i + 1}`,
                component: path.resolve("./src/templates/podcast-list.js"),
                context: {
                    limit: gridItemsPerPage,
                    skip: i * gridItemsPerPage,
                    numPages: numPodcastEpisodes,
                    currentPage: i + 1
                }
            });
        });

        result.data.blog.edges.forEach(({ node }) => {
            let template =
                node.frontmatter.template === undefined
                    ? "blog"
                    : node.frontmatter.template;
            createPage({
                path: node.fields.slug,
                component: path.resolve("./src/templates/" + template + ".js"),
                context: {
                    slug: node.fields.slug
                }
            });
        });

        result.data.podcast.edges.forEach(({ node }) => {
            let template =
                node.frontmatter.template === undefined
                    ? "podcast"
                    : node.frontmatter.template;
            createPage({
                path: node.fields.slug,
                component: path.resolve("./src/templates/" + template + ".js"),
                context: {
                    slug: node.fields.slug
                }
            });
        });

        result.data.basepages.edges.forEach(({ node }) => {
            let template =
                node.frontmatter.template === undefined
                    ? "basepage"
                    : node.frontmatter.template;
            createPage({
                path: node.fields.slug,
                component: path.resolve("./src/templates/" + template + ".js"),
                context: {
                    slug: node.fields.slug
                }
            });
        });
    }).catch(e => console.log(e))
};
