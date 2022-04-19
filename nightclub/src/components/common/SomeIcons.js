import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaSkype,
  FaBimobject,
} from "react-icons/fa";
const SomeIconsStyle = styled.section`
  margin-bottom: 2rem;
  svg {
    font-size: 2rem;
    border: 3px solid white;
    padding: 0.7rem;
    width: 1.4em;
    height: 1.4em;
    margin-left: 1rem;
    margin-right: 1rem;
    color: white;
  }
`;
const SomeIcons = ({
  extended,
  linkFb = "#",
  linkTwitter = "#",
  linkGoogle = "#",
}) => {
  return (
    <SomeIconsStyle>
      <Link to={linkFb}>
        <FaFacebookF />
      </Link>
      <Link to={linkTwitter}>
        <FaTwitter />
      </Link>
      <Link to={linkGoogle}>
        <FaGooglePlusG />
      </Link>
      {extended ? (
        <>
          <Link to="#">
            <FaSkype />
          </Link>
          <Link to="#">
            <FaBimobject />
          </Link>
        </>
      ) : null}
    </SomeIconsStyle>
  );
};

export default SomeIcons;
