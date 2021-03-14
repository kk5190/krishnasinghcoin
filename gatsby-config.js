module.exports = {
    siteMetadata: {
      description: "Personal page of Krishna Singh",
      locale: "en",
      title: "Krishna Kumar Singh",
    },
    plugins: [
      {
        resolve: "@wkocjan/gatsby-theme-intro",
        options: {
          basePath: "/",
          contentPath: "content/",
          showThemeLogo: false,
          theme: "dark-blue",
        },
      },
    ],
  }
  