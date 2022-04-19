import styled from "styled-components";
import { Link } from "react-router-dom";
const LogoStyle = styled.div`
  text-transform: uppercase;
  a {
    color: white;
  }
  .topLogo {
    font-size: var(--small-head);
    font-family: "Ubuntu Medium";
    font-weight: 700;
    letter-spacing: 4.5px;
    padding-bottom: 4.5px;
    span {
      color: var(--magenta);
    }
  }
  .bottomLogo {
    font-size: 10px;
    font-family: "Ubuntu Light";
    letter-spacing: 5.5px;
  }
`;
const Logo = () => {
  return (
    <LogoStyle>
      <Link to="/">
        <p className="topLogo">
          Night<span>Club</span>
        </p>
        <p className="bottomLogo">Have a good time</p>
      </Link>
    </LogoStyle>
  );
};

export default Logo;
