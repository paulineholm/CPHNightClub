import styled from "styled-components";
import SmallBottomLine from "../../assets/bottom_line2.png";
const SectionHeadStyle = styled.span`
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-top: 5vh;
  padding-bottom: 5vh;
  span {
    color: var(--magenta);
  }
`;
const SectionHead = ({
  headline = "Home Sections Headline",
  modified = "",
}) => {
  return (
    <SectionHeadStyle>
      <h2>
        {headline}
        <span>{modified}</span>
      </h2>
      <img src={SmallBottomLine} alt="" />
    </SectionHeadStyle>
  );
};
export default SectionHead;
