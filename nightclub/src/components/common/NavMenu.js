import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import LogoUnderLine from "../../assets/bottom_line.png";
const NavStyles = styled.nav`
  width: 100vw;
  height: 9.5vh;
  border-color: var(--magenta);
  border-style: solid;
  border-width: 1px 0px;
  ul {
    .active {
      color: var(--magenta);
      background-image: url(${LogoUnderLine});
      background-position: bottom;
      background-size: cover;
    }
    a {
      color: white;
      text-transform: uppercase;
      letter-spacing: 0.05rem;
      padding: 0rem 1.5rem;
    }
  }
  .flex-container {
    display: flex;
    margin-left: 15vw;
    margin-right: 15vw;
    padding-top: 2vh;
  }
  .flex-left {
    width: 20vw;
  }
  .flex-right {
    width: 40vw;
    padding-top: 1rem;
  }
`;
const TopLeftTriangle = styled.div`
  left: 0;
  border-top: 2.5rem solid var(--magenta);
  border-right: 2.5rem solid transparent;
  position: absolute;
`;
const BottomRightTriangle = styled.div`
  right: 0;
  border-bottom: 2.5rem solid var(--magenta);
  border-left: 2.5rem solid transparent;
  position: absolute;
`;
const NavMenu = () => {
  return (
    <NavStyles>
      <TopLeftTriangle />
      <div className="flex-container">
        <div className="flex-left">
          <Logo />
        </div>
        <ul className="flex-right">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blogarchive">Blog</NavLink>
          <NavLink to="/booking">Book Table</NavLink>
          <NavLink to="/contact">Contact us</NavLink>
        </ul>
      </div>
      <BottomRightTriangle />
    </NavStyles>
  );
};

export default NavMenu;
