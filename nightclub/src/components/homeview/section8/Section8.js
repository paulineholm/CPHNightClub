import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
const Section8Style = styled.section`
  padding-top: 5vh;
  padding-bottom: 5vh;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  article {
    h3 {
      font-family: "Ubuntu Light";
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    p {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      span {
        color: var(--magenta);
      }
    }
  }
  .subscribedInfo {
    padding-top: 2rem;
    padding-bottom: 2rem;
    font-weight: bold;
  }
  form {
    padding-top: 5vh;
    padding-bottom: 5vh;
    input {
      width: 25vw;
      margin-right: 2rem;
      background: transparent;
      border: none;
      border-bottom: 3px solid white;
      padding: 1rem;
      font-size: 1rem;
      color: white;
    }
    p {
      padding-top: 2rem;
      padding-bottom: 2rem;
      font-weight: bold;
      color: var(--magenta);
    }
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
    }
  }
`;
const newsletterValidationSchema = {
  email: {
    required: "Please type your email",
    pattern: {
      value: true && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Please type a correct e-mail adress!",
    },
  },
};
const Section8 = () => {
  const [subscribe, setSubscribe] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios.post("http://localhost:4000/newsletters", data).then((response) => {
      toast("Subscribing you", { autoClose: 800, position: "bottom-center" });
      if (response.status === 201) {
        setSubscribe(true);
      }
    });
  };

  return (
    <Section8Style>
      <article>
        <h3>Want the latest night club news</h3>
        <p>
          Subscribe to our newsletter and never miss a <span>Event</span>
        </p>
      </article>
      {subscribe === true ? (
        <section className="subscribedInfo">
          <p>Thanks for subscribing!</p>
          <br />
          <p>
            We are looking forward seeing you on the dance floor you sexy beast!
            💃🏻💃 👯‍♀️ 🕺🏽🕺🏽
          </p>
        </section>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="newsletter" />
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", newsletterValidationSchema.email)}
          />
          {errors?.email && <p>{errors.email.message}</p>}
          <button type="submit" style={{ cursor: "pointer" }}>
            Subscribe
          </button>
        </form>
      )}
    </Section8Style>
  );
};

export default Section8;
