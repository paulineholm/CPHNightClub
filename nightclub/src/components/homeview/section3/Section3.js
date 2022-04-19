import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import Masonry from "react-masonry-css";
import Loader from "../../common/Loader";
import SectionHead from "../SectionHead";
const imgSize = ["40vw", "50vw", "60vw", "70vw"];
const random_imgSize = imgSize[Math.floor(Math.random() * imgSize.length)];
const Section3Style = styled.section`
  padding-top: 5vh;
  padding-bottom: 5vh;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  .my-masonry-grid {
    display: flex;
    width: 100vw;
    margin-top: 1vh;
    margin-bottom: 5vh;
  }
  .my-masonry-grid_column {
    padding-left: 0px;
    background-clip: padding-box;
  }
  /* .my-masonry-grid_column > img {
    background: red;
  } */
  .overlayContainer {
    position: relative;
  }
  .overlay {
    color: white;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: #010203cc;
    border-top: 1px solid var(--magenta);
    border-bottom: 1px solid var(--magenta);
  }
  .overlayContainer:hover .overlay {
    opacity: 1;
  }
  .overlayText {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;
const Section3 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [gallery, setGallery] = useState();
  useEffect(() => {
    axios("http://localhost:4000/gallery").then((response) => {
      setGallery(response.data);
      setIsLoading(false);
    });
  }, []);
  const { ref, inView } = useInView({ threshold: 0.2 });
  const galleryAnimation = useAnimation();
  useEffect(() => {
    if (inView) {
      galleryAnimation.start({
        x: 0,
        transition: {
          ease: "easeIn",
          duration: 2,
        },
      });
    }
    if (!inView) {
      galleryAnimation.start({ x: "-1200px" });
    }
  }, [inView, galleryAnimation, gallery]);
  return (
    <Section3Style>
      <div ref={ref}>
        <SectionHead headline="Night Club Gallery" />
        <motion.div animate={galleryAnimation}>
          {isLoading ? (
            <Loader />
          ) : (
            <Masonry
              breakpointCols={4}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {gallery?.map((img) => (
                <div className="overlayContainer" key={img.id}>
                  <img
                    src={img.asset.url}
                    alt={img.description}
                    style={{
                      width: random_imgSize,
                    }}
                  />
                  <Link to="#" className="overlay">
                    <p className="overlayText">{img.description}</p>
                  </Link>
                </div>
              ))}
            </Masonry>
          )}
        </motion.div>
      </div>
    </Section3Style>
  );
};

export default Section3;
