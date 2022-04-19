import styled from "styled-components";
const BookingStyles = styled.main`
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
`;
const Booking = () => {
  return (
    <BookingStyles>
      <h1>Under Construction 🚧</h1>
      <span>🏗️👷👷‍♀️🧑‍🏭</span>
      <p>We are still building our booking system!</p>
    </BookingStyles>
  );
};

export default Booking;
