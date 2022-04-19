import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
const ContactFormStyle = styled.div`
  width: 40vw;
  .msgSentInfo {
    padding: 2rem;
    font-weight: bold;
    text-align: center;
    margin-top: 5vh;
  }
  form {
    padding: 1rem;
    .regularInput,
    .contentInput {
      width: 35vw;
      background: transparent;
      color: white;
      padding: 1rem;
      border: 1px solid white;
      margin-bottom: 1rem;
      margin-top: 1rem;
    }
    .contentInput {
      height: 20vh;
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
      float: right;
      margin: 1rem 3rem;
    }
  }
  .errorMsg {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    color: var(--magenta);
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
  email: {
    required: "Please type your email",
    pattern: {
      value: true && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Please type a correct e-mail adress!",
    },
  },
  content: {
    required: {
      value: true,
      message: "Please communicate something!",
    },
    minLength: { value: 10, message: "too short!" },
  },
};
var today = new Date();
const ContactForm = () => {
  const [msgSent, setMsgSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:4000/contact_messages", data)
      .then((response) => {
        toast("Sending the message", {
          autoClose: 800,
          position: "bottom-center",
        });
        if (response.status === 201) {
          setMsgSent(true);
        }
      });
  };
  return (
    <ContactFormStyle>
      {msgSent === true ? (
        <section className="msgSentInfo">
          <p>Your message is send!</p>
          <br />
          <p>
            We are looking forward seeing you on the dance floor you sexy beast!
            💃🏻💃 👯‍♀️ 🕺🏽🕺🏽
          </p>
        </section>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name" />
          <input
            type="text"
            placeholder="Your name"
            {...register("name", validationSchema.name)}
            className="regularInput"
          />
          {errors?.name && <p className="errorMsg">{errors.name.message}</p>}
          <br />
          <label htmlFor="email" />
          <input
            type="email"
            placeholder="Your email"
            {...register("email", validationSchema.email)}
            className="regularInput"
          />
          {errors?.email && <p className="errorMsg">{errors.email.message}</p>}
          <br />
          <input
            style={{ display: "none" }}
            type="text"
            value={today}
            {...register("date")}
          />
          <br />
          <label htmlFor="content" />
          <input
            type="text"
            placeholder="Your message"
            {...register("content", validationSchema.content)}
            className="contentInput"
          />
          {errors?.content && (
            <p className="errorMsg">{errors.content.message}</p>
          )}
          <br />
          <button type="submit" style={{ cursor: "pointer" }}>
            Submit
          </button>
        </form>
      )}
    </ContactFormStyle>
  );
};

export default ContactForm;
