import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/common/Loader";
import UnderSideHeadline from "../components/common/UnderSideHeadline";
const BlogArchiveStyles = styled.main`
  article {
    display: flex;
    img {
      width: 50vw;
    }
    section {
      width: 50vw;
      padding: 1rem;
      h2 {
        text-transform: uppercase;
        font-family: "Ubuntu Light";
        font-size: 1.3rem;
        padding: 0.5rem;
      }
      h3 {
        color: var(--magenta);
        font-size: 1rem;
        padding: 0.5rem;
        font-weight: 500;
      }
      a {
        width: 10vw;
        background: transparent;
        border: none;
        border-top: 3px solid white;
        border-bottom: 3px solid white;
        padding: 1rem;
        margin: 5vh 1vw 5vh 35vw;
        font-size: 1rem;
        color: white;
        text-transform: uppercase;
      }
    }
  }
  .postContent {
    line-height: 1.5em;
    height: 8em;
    overflow: hidden;
    padding: 1rem 0;
    color: white;
    padding: 0.5rem;
    margin-bottom: 3rem;
  }
`;
const BlogArchive = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState();
  useEffect(() => {
    axios("http://localhost:4000/blogposts").then((response) => {
      setPosts(response.data);
      setIsLoading(false);
    });
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <BlogArchiveStyles>
      <UnderSideHeadline headline="Blog" />
      {posts.map((post) => (
        <article key={post.id}>
          <img src={post.asset.url} alt={post.title} />
          <section>
            <h2>{post.title}</h2>
            <h3>
              <span>BY: </span>
              {post.author}
            </h3>
            <p className="postContent">{post.content}</p>
            <Link to={`/blogpost/${post.id}`} style={{ cursor: "pointer" }}>
              Read more
            </Link>
          </section>
        </article>
      ))}
    </BlogArchiveStyles>
  );
};

export default BlogArchive;
