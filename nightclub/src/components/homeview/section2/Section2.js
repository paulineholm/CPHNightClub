import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHead from "../SectionHead";
import Loader from "../../common/Loader";
const Section2Style = styled.section`
  padding: 5vw 5vh;
  text-align: center;
  display: block;
  .swiper-slide {
    margin-bottom: 5vh;
  }
  .eventWrap {
    background: var(--magenta);
    width: 40vw;
    margin: 0.5vh 5vw 5vh 4vw;
    text-align: left;
    .eventOverlayWrap {
      position: relative;
    }
    .animationContent {
      position: absolute;
      width: 100%;
      height: 51vh;
      background: #030203cc;
      border-top: 1px solid var(--magenta);
      border-bottom: 1px solid var(--magenta);
      .animationContentTop {
        text-align: center;
        height: 40%;
        padding-top: 5rem;
        a {
          background: var(--magenta);
          padding: 1rem 2rem;
          color: white;
        }
      }
      .animationContentBottom {
        height: 60%;
        padding: 1rem;
        background: #070203cc;
        h2 {
          text-transform: uppercase;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
        }
      }
    }
    img {
      width: 40vw;
    }
    .eventDetails {
      padding: 1rem;
    }
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
const Section2 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState();
  const [index, setIndex] = useState(null);

  useEffect(() => {
    axios("http://localhost:4000/events").then((response) => {
      setEvents(response.data);
      setIsLoading(false);
    });
  }, []);
  let dateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: "true",
  };
  return isLoading ? (
    <Loader />
  ) : (
    <Section2Style>
      <SectionHead headline="Events of the month" />
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        spaceBetween={0}
        slidesPerView={2}
        pagination={{
          clickable: true,
          type: "bullets",
        }}
      >
        {events.map((event, i) => (
          <SwiperSlide key={event.id}>
            <div
              key={i}
              onMouseEnter={() => setIndex(i)}
              onMouseLeave={() => setIndex(null)}
              className="eventWrap"
            >
              <div className="eventOverlayWrap">
                <AnimatePresence>
                  {index === i && (
                    <motion.section
                      initial={{ y: 400, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 400, opacity: 0 }}
                      transition={{ type: "spring" }}
                      className="animationContent"
                    >
                      <div className="animationContentTop">
                        <Link to="/booking">Book Now</Link>
                      </div>
                      <article className="animationContentBottom">
                        <h2>{event.title}</h2>
                        <p>{event.description}</p>
                      </article>
                    </motion.section>
                  )}
                </AnimatePresence>
              </div>
              <img src={event.asset.url} alt={event.title} />
              <p className="eventDetails">
                {new Date(event.date).toLocaleString("en-GB", dateOptions)}{" "}
                {event.location}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section2Style>
  );
};

export default Section2;
