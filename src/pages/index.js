import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default ({ data }) => {
  console.log({ data })
  return (
    <Layout>
      <Seo title="Home" />
      <div>
        <h1>Nelson's Thoughts</h1>
        <h4>{data.allMarkdownRemark.totalCount}</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h2>
              {node.frontmatter.title} - {node.frontmatter.date}
            </h2>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
        <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
        <Link to="/using-dsg">Go to "Using DSG"</Link>
      </p>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            description
            title
            date
          }
          html
          excerpt
        }
      }
    }
  }
`
