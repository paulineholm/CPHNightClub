import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import SectionHead from "../SectionHead";
import Loader from "../../common/Loader";
const Section7Style = styled.section`
  .swiper {
    margin: 0.5vh 5vw 5vh 5vw;
  }
  .swiper-slide {
    padding: 1rem;
  }
  .postTitle {
    text-transform: uppercase;
    color: white;
    padding: 1rem 0;
  }
  .postAuthor {
    color: var(--magenta);
    span {
      font-weight: 700;
    }
  }
  .postContent {
    line-height: 1.5em;
    height: 5.7em;
    overflow: hidden;
    padding: 1rem 0;
    color: white;
  }
  .swiper-pagination {
    --swiper-theme-color: var(--magenta);
    --swiper-pagination-bullet-inactive-color: white;
    --swiper-pagination-bullet-inactive-opacity: 1;
    bottom: 0;
  }
  .swiper-pagination-bullet {
    border-radius: 0;
    width: 1rem;
    height: 1rem;
  }
`;
const Section7 = () => {
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
    <Section7Style>
      <SectionHead headline="Recent blog" />
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        spaceBetween={0}
        slidesPerView={3}
        pagination={{
          clickable: true,
          type: "bullets",
        }}
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id}>
            <Link to={`/blogpost/${post.id}`} className="postContainer">
              <article>
                <img
                  src={post.asset.url}
                  alt={post.title}
                  className="postImg"
                />
                <h2 className="postTitle">{post.title}</h2>
                <p className="postAuthor">
                  BY: <span>{post.author}</span>
                </p>
                <p className="postContent">{post.content}</p>
              </article>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section7Style>
  );
};

export default Section7;
