import type { GatsbyConfig } from "gatsby";

const useCustomGraphqlTypegen = true;

const config: GatsbyConfig = {
  graphqlTypegen: !useCustomGraphqlTypegen,
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-postcss",
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

if (useCustomGraphqlTypegen) {
  config.plugins?.push({
    resolve: "@bond-london/gatsby-graphql-typegen",
    options: {
      gatsbyTypesFile: "gatsby-types.d.ts",
    },
  });
}

export default config;
