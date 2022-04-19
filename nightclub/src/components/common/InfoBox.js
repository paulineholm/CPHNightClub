import styled from "styled-components";
const InfoBoxStyle = styled.section`
  background: transparent;
  padding: 1rem 0;
  h3 {
    text-transform: uppercase;
    color: var(--magenta);
    padding-bottom: 0.7rem;
  }
  p {
    text-transform: capitalize;
  }
`;
const InfoBox = ({ title, details }) => {
  return (
    <InfoBoxStyle>
      <h3>{title}</h3>
      <p>{details}</p>
    </InfoBoxStyle>
  );
};

export default InfoBox;
