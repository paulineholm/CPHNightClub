import styled from "styled-components";
import HeadlineBg from "../../assets/footerbg.jpg";
import SectionHead from "../homeview/SectionHead";
const UnderSideHeadlineStyle = styled.div`
  background-image: url(${HeadlineBg});
  background-position: center;
  background-size: cover;
  height: 20vh;
  .shadowBg {
    width: 100vw;
    height: 20vh;
    background: #030203cc;
  }
`;
const UnderSideHeadline = ({ headline }) => {
  return (
    <UnderSideHeadlineStyle>
      <div className="shadowBg">
        <SectionHead headline={headline} />
      </div>
    </UnderSideHeadlineStyle>
  );
};

export default UnderSideHeadline;
