import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ImgPlaceholder from "../assets/testimonial_2.jpg";
import UnderSideHeadline from "../components/common/UnderSideHeadline";
import Loader from "../components/common/Loader";
const BlogPostStyles = styled.main`
  .blogpostContainer {
    width: 60vw;
    margin: 5vh auto;
    img {
      width: 60vw;
      margin-top: 2vh;
      margin-bottom: 2vh;
    }
    h1 {
      text-transform: uppercase;
      font-family: "Ubuntu Light";
      font-size: 1.3rem;
      padding-top: 1rem;
      padding-bottom: 0.5rem;
    }
    h2 {
      color: var(--magenta);
      font-size: 1rem;
      padding-top: 0.5rem;
      padding-bottom: 1rem;
      font-weight: 500;
    }
    p {
      line-height: 1.5;
    }
  }
  .commentsContainer {
    width: 60vw;
    margin: 5vh auto;
    h3 {
      text-transform: uppercase;
      font-family: "Ubuntu Light";
      font-size: 1.5rem;
      padding-top: 0.5rem;
      padding-bottom: 1rem;
    }
  }
  .commentBox {
    display: flex;
    .commentBoxLeft {
      width: 10%;
      margin: 1rem 0;
    }
    .commentBoxRight {
      width: 85%;
      margin: 1rem;
      font-family: "Ubuntu Light";
      span {
        color: var(--magenta);
        font-weight: 300;
      }
      p {
        padding: 1rem 0;
      }
    }
  }
  .leaveCommentContainer {
    width: 60vw;
    margin: 5vh auto;
    h3 {
      text-transform: uppercase;
      font-family: "Ubuntu Light";
      font-size: 1.5rem;
      padding-top: 0.5rem;
      padding-bottom: 1rem;
    }
  }
  .commentInput {
    padding: 1rem;
    margin: 0.5rem 0;
    width: 60vw;
    background: transparent;
    color: white;
    padding: 1rem;
    border: 1px solid white;
  }
  form {
    button {
      width: 8vw;
      background: transparent;
      border: none;
      border-top: 3px solid white;
      border-bottom: 3px solid white;
      padding: 1rem;
      font-size: 1rem;
      color: white;
      text-transform: uppercase;
      margin: 1vh 1vw 1vh 50vw;
    }
  }
`;

const validationSchema = {
  name: {
    required: {
      value: true,
      message: "Place fill in your name!",
    },
    minLength: { value: 4, message: "Name is too short!" },
  },
  content: {
    required: {
      value: true,
      message: "Please communicate something!",
    },
    minLength: { value: 10, message: "too short!" },
  },
  date: {
    required: {
      value: true,
    },
  },
  blogpostId: {
    required: {
      value: true,
    },
  },
};
const BlogPost = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [blogpost, setBlogpost] = useState();
  const [comment, setComment] = useState(false);
  useEffect(() => {
    axios(`http://localhost:4000/blogposts/${id}?_embed=comments`).then(
      (response) => {
        setBlogpost(response.data);
        setIsLoading(false);
      }
    );
  }, [id]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let dateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  var today = new Date();
  const onSubmit = (data) => {
    axios
      .post(`http://localhost:4000/comments?blogpostId=${id}`, data)
      .then((response) => {
        toast("Comment is added", {
          autoClose: 800,
          position: "bottom-center",
        });
        if (response.status === 201) {
          setComment(true);
        }
      });
  };
  return isLoading ? (
    <Loader />
  ) : (
    <BlogPostStyles>
      <UnderSideHeadline headline="Blog post" />
      <article className="blogpostContainer">
        <img src={blogpost.asset.url} alt={blogpost.title} />
        <h1>{blogpost.title}</h1>
        <h2>
          BY:{" "}
          <span>
            {blogpost.author} / {blogpost.comments.length}{" "}
          </span>
          Comments / today
        </h2>
        <p>{blogpost.content}</p>
      </article>

      <section className="commentsContainer">
        <h3>{blogpost.comments.length} comments</h3>
        {blogpost.comments?.map((comment) => (
          <div key={comment.id} className="commentBox">
            <img src={ImgPlaceholder} alt="" className="commentBoxLeft" />
            <div className="commentBoxRight">
              <h4>
                {comment.name} -{" "}
                <span>
                  Posted{" "}
                  {new Date(comment.date).toLocaleString("en-GB", dateOptions)}
                </span>
              </h4>
              <p>{comment.content}</p>
            </div>
          </div>
        ))}
      </section>
      <div className="leaveCommentContainer">
        <h3>Leave a comment</h3>
        {comment === true ? (
          <section className="subscribedInfo">
            <p>
              You have just commented! Please wait for our moderator to accept
              your comment!
            </p>
          </section>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name" />
            <input
              className="commentInput"
              type="text"
              placeholder="Your name"
              {...register("name", validationSchema.name)}
            />
            {errors?.name && <p>{errors.name.message}</p>}
            <br />
            <label htmlFor="content" />
            <input
              className="commentInput"
              style={{ height: "15vh" }}
              type="text"
              placeholder="Your message"
              {...register("content", validationSchema.content)}
            />
            {errors?.content && <p>{errors.content.message}</p>}
            <br />
            <input
              style={{ display: "none" }}
              type="text"
              value={today}
              {...register("date", validationSchema.date)}
            />
            <br />
            <input
              style={{ display: "none" }}
              type="text"
              value={id}
              {...register("blogpostId", validationSchema.blogpostId)}
            />
            <button type="submit" style={{ cursor: "pointer" }}>
              Submit
            </button>
          </form>
        )}
      </div>
    </BlogPostStyles>
  );
};

export default BlogPost;
