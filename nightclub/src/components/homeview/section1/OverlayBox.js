import styled from "styled-components";
import { FaCocktail, FaConciergeBell, FaWalking } from "react-icons/fa";
const OverlayBoxStyle = styled.div`
  .overlayContainer {
    position: relative;
  }
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    border-top: 1px solid var(--magenta);
    border-bottom: 1px solid var(--magenta);
    background: black;
    text-align: center;
    padding: 7rem 5rem;
  }
  .overlayContainer:hover .overlay {
    opacity: 1;
  }
  .overlayContent {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    svg {
      color: var(--magenta);
      padding: 1rem;
      font-size: 1.5rem;
      width: 3em;
      height: 3em;
      border: 2px solid var(--magenta);
      border-radius: 5px;
    }
    article {
      color: var(--light-grey);
      h2 {
        text-transform: uppercase;
        padding-top: 1rem;
        padding-bottom: 1rem;
        font-family: "Ubuntu Light";
      }
    }
  }
`;
const OverlayBox = ({
  imgSrc,
  altTxt,
  nightClub,
  restaurant,
  bar,
  title,
  text,
}) => {
  return (
    <OverlayBoxStyle>
      <div className="overlayContainer">
        <img src={imgSrc} alt={altTxt} />
        <div className="overlay">
          <article className="overlayContent">
            <span>
              {nightClub ? (
                <FaWalking />
              ) : restaurant ? (
                <FaConciergeBell />
              ) : bar ? (
                <FaCocktail />
              ) : null}
            </span>
            <article>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          </article>
        </div>
      </div>
    </OverlayBoxStyle>
  );
};

export default OverlayBox;
