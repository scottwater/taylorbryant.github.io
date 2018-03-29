import React from "react";
import Helmet from "react-helmet";
import avatar from "../images/avatar.svg";

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <div className="blog-post-container">
      <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <div className="flex items-center mb-16">
          <img src={avatar} className="h-12 mr-4 w-12" />
          <div>
            <h4 className="mb-1 text-grey-darkest">Taylor Bryant</h4>
            <p className="mb-2 text-grey-darker text-sm">Front-end developer from Memphis, TN. Father of three fluffy cats.</p>
            <p className="text-grey-dark text-xs">Mar 30 • 7 min read</p>
          </div>
        </div>

        {/*<img
          src="https://images.unsplash.com/photo-1520257119747-9591a2d38189?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=89acb684d21ffbb4b1224d1034a262e8&auto=format&fit=crop&w=680&q=80" className="max-w-none -mx-8 my-8"
        />*/}

        <h1>{post.frontmatter.title}</h1>

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
