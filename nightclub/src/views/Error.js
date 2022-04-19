import styled from "styled-components";
import { Link } from "react-router-dom";
const ErrorStyles = styled.main`
  text-align: center;
  padding-top: 10vh;
  padding-bottom: 10vh;
  h1,
  span,
  p {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  span,
  p {
    font-size: 1.7rem;
  }
  a {
    color: var(--magenta);
  }
`;
const Error = () => {
  return (
    <ErrorStyles>
      <h1>Uuuups! You went a wrong way!</h1>
      <p>
        Read more about what we offer on our <Link to="/"> frontpage</Link> 💃🏻💃
        👯‍♀️ 🕺🏽🕺🏽
      </p>
    </ErrorStyles>
  );
};

export default Error;
