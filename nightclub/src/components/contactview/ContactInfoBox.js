import styled from "styled-components";
import {
  FaMapMarkerAlt,
  FaMobileAlt,
  FaEnvelope,
  FaMouse,
} from "react-icons/fa";
const ContactInfoBoxStyle = styled.span`
  display: flex;
  padding: 2rem 3rem;
  .boxLeft {
    width: 20%;
  }
  .boxRight {
    width: 80%;
  }
  a {
    color: white;
  }
`;
const ContactInfoBox = ({ location, mobile, msg, web }) => {
  return (
    <ContactInfoBoxStyle>
      <div className="boxLeft">
        {location ? (
          <a href="https://goo.gl/maps/eF7HmUoamyLmem8t5">
            <FaMapMarkerAlt />
          </a>
        ) : mobile ? (
          <a href="tel:+4560223645">
            <FaMobileAlt />
          </a>
        ) : msg ? (
          <a href="mailto:info@cphnightclub.dk">
            <FaEnvelope />
          </a>
        ) : web ? (
          <a href="www.cphnightclub.dk">
            <FaMouse />
          </a>
        ) : null}
      </div>
      <div className="boxRight">
        {location ? (
          <a href="https://goo.gl/maps/eF7HmUoamyLmem8t5">
            Skindergade 45, 1159 København
          </a>
        ) : mobile ? (
          <a href="tel:+4560223645">+45 60 22 36 45</a>
        ) : msg ? (
          <a href="mailto:info@cphnightclub.dk">info@cphnightclub.dk</a>
        ) : web ? (
          <a href="www.cphnightclub.dk">www.cphnightclub.dk</a>
        ) : null}
      </div>
    </ContactInfoBoxStyle>
  );
};

export default ContactInfoBox;
