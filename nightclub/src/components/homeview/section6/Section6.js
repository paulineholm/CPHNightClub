import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import SomeIcons from "../../common/SomeIcons";
import Loader from "../../common/Loader";
const Section6Style = styled.section`
  padding-top: 5vh;
  padding-bottom: 5vh;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  .swiper-slide {
    padding-bottom: 5vh;
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
  article {
    h3 {
      text-transform: uppercase;
      padding-top: 2rem;
      padding-bottom: 1rem;
    }
    p {
      padding: 1rem 15rem 3rem;
    }
  }
`;
const Section6 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [testimonials, setTestimonials] = useState();
  useEffect(() => {
    axios("http://localhost:4000/testimonials").then((response) => {
      setTestimonials(response.data);
      setIsLoading(false);
    });
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <Section6Style>
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
          type: "bullets",
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div>
              <img src={testimonial.asset.url} alt={testimonial.name} />
              <article>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.content}</p>
              </article>
              <span>
                <SomeIcons
                  linkFb={testimonial.facebook}
                  linkTwitter={testimonial.twitter}
                />
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section6Style>
  );
};

export default Section6;
