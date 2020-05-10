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
                    blogItemsPerPage
                    podcastEpisodesPerPage
                }
            }
        }
    `).then(result => {
        const blogPosts = result.data.blog.edges;
        const blogPostsPerPage =
            result.data.limitPost.siteMetadata.blogItemsPerPage;
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

        const categories = [];
        blogPosts.forEach((post, index, arr) => {
            if (post.node.frontmatter.category != null) {
                post.node.frontmatter.category.forEach(cat => categories.push(cat))
            }
        });

        const countCategories = categories.reduce((prev, curr) => {
            prev[curr] = (prev[curr] || 0) + 1
            return prev
        }, {});
        const allCategories = Object.keys(countCategories)

        allCategories.forEach((cat, i) => {
            const categorySlug = kebabCase(cat);
            const link = `/category/${categorySlug.slice(1)}`
            const numPostsForCategory = Math.ceil(countCategories[cat] / blogPostsPerPage);

            Array.from({ length: numPostsForCategory }).forEach((_, i) => {
                createPage({
                    path: i === 0 ? link : `${link}/${i + 1}`,
                    component: path.resolve("./src/templates/blog-category.js"),
                    context: {
                        //allCategories: allCategories,
                        category: cat,
                        limit: blogPostsPerPage,
                        skip: i * blogPostsPerPage,
                        currentPage: i + 1,
                        numPages: Math.ceil(countCategories[cat] / blogPostsPerPage),
                    },
                })
            })
        })

        const podcastEpisodes = result.data.podcast.edges;
        const podcastEpisodesPerPage =
            result.data.limitPost.siteMetadata.podcastEpisodesPerPage;
        const numPodcastEpisodes = Math.ceil(
            podcastEpisodes.length / podcastEpisodesPerPage
        );

        Array.from({ length: numPodcastEpisodes }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/podcast` : `/podcast/${i + 1}`,
                component: path.resolve("./src/templates/podcast-list.js"),
                context: {
                    limit: podcastEpisodesPerPage,
                    skip: i * podcastEpisodesPerPage,
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
