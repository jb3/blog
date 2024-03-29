module.exports = {
  siteMetadata: {
    title: "Joe Banks",
    siteUrl: "https://jb3.dev/",
    logo: "./images/icon.png",
    contactMail: "joe@jb3.dev"
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-plaintext",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-projects`,
        path: `${__dirname}/src/projects`,
      },
      __key: "projects",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static-files`,
        path: `${__dirname}/static`,
      },
      __key: "static-files",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-robots-txt",
  ],
};
