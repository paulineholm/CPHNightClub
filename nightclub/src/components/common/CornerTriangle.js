import styled from "styled-components";

const TriangleStyle = styled.div`
  top: 0;
  left: ${(props) => (props.left ? 0 : 5)};
  position: absolute;
  border-top: 2.5rem solid var(--magenta);
  border-right: 2.5rem solid transparent;
`;
const CornerTriangle = ({ left }) => {
  return <TriangleStyle />;
};

export default CornerTriangle;
