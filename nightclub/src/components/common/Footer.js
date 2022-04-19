import styled from "styled-components";
import BottomFooter from "./BottomFooter";
import TopFooter from "./TopFooter";
const FooterStyles = styled.footer`
  bottom: 0;
  position: relative;
  width: 100vw;
`;
const Footer = () => {
  return (
    <FooterStyles>
      <TopFooter />
      <BottomFooter />
    </FooterStyles>
  );
};

export default Footer;
