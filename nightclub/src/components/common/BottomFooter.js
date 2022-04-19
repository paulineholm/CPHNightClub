import styled from "styled-components";
import SomeIcons from "./SomeIcons";
const BottomFooterStyle = styled.div`
  background: var(--navy-blue);
  text-align: center;
  height: 10vh;
  display: flex;
  margin-left: 5vw;
  margin-right: 5vw;
  section {
    width: 30vw;
    padding: 1rem 0;
  }
`;
const BottomFooter = () => {
  return (
    <BottomFooterStyle>
      <section>stay connected with us night club</section>
      <SomeIcons extended />
      <section>CopyRight @ 2018 nightclub psd template all right</section>
    </BottomFooterStyle>
  );
};

export default BottomFooter;
