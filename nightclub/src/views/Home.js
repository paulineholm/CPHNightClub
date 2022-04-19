import styled from "styled-components";
import Section1 from "../components/homeview/section1/Section1";
import Section2 from "../components/homeview/section2/Section2";
import Section3 from "../components/homeview/section3/Section3";
import Section6 from "../components/homeview/section6/Section6";
import Section7 from "../components/homeview/section7/Section7";
import Section8 from "../components/homeview/section8/Section8";
const HomeStyles = styled.main`
  background: var(--navy-blue);
`;
const Home = () => {
  return (
    <HomeStyles>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section6 />
      <Section7 />
      <Section8 />
    </HomeStyles>
  );
};

export default Home;
