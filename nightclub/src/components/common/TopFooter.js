import styled from "styled-components";
import FooterBg from "../../assets/footerbg.jpg";
import InfoBox from "./InfoBox";
import Logo from "./Logo";
import RecentPosts from "./RecentPosts";
const TopFooterStyle = styled.div`
  background-image: url(${FooterBg});
  background-position: center;
  background-size: cover;
  height: 50vh;
  .shadowBg {
    width: 100vw;
    height: 50vh;
    background: #030203cc;
    display: flex;
    padding: 5vh 10vw;
  }
  .topFooterLeft {
    width: 20vw;
  }
  .topFooterRight {
    width: 60vw;
    display: flex;
  }
`;
const TopFooter = () => {
  return (
    <TopFooterStyle>
      <div className="shadowBg">
        <div className="topFooterLeft">
          <Logo />
          <br />
          <InfoBox title="location" details="Skindergade 45, 1159 København" />
          <InfoBox title="opening hours" details="mon - fri 9am to 10pm" />
          <InfoBox title="weekend" details="mon - fri 2pm to 6am" />
        </div>
        <div className="topFooterRight">
          <RecentPosts ver1 />
          <RecentPosts />
        </div>
      </div>
    </TopFooterStyle>
  );
};

export default TopFooter;
