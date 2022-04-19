import styled from "styled-components";
import RecentPost1 from "../../assets/recent_post1.jpg";
import RecentPost2 from "../../assets/recent_post2.jpg";
import { FaTwitter } from "react-icons/fa";
const RecentPostsStyle = styled.section`
  h3 {
    text-transform: uppercase;
    color: var(--magenta);
    padding-top: 0.2rem;
    padding-bottom: 2.5rem;
  }
  .recentPostWrap {
    display: flex;
    padding-bottom: 2rem;
    margin-right: 4vw;
    img {
      width: 10vw;
      margin-right: 1rem;
    }
    svg {
      font-size: 1.5rem;
      width: 5vw;
      color: var(--magenta);
      margin-top: 1rem;
    }
    span {
      padding: 0.5rem;
    }
    .postDate {
      color: var(--magenta);
      padding-top: 0.5rem;
    }
  }
`;
const RecentPosts = ({ ver1 }) => {
  return (
    <RecentPostsStyle>
      <h3>recent posts</h3>
      {ver1 ? (
        <>
          <section className="recentPostWrap">
            <img src={RecentPost1} alt="DJ Macron playing last season" />
            <span>
              <p>
                Polaroid hot chicken helvetica, sriracha messenger bag vape banh
                mi keffiyeh art party.
              </p>
              <p className="postDate">April 17, 2018</p>
            </span>
          </section>
          <section className="recentPostWrap">
            <img src={RecentPost2} alt="Hot June audience" />
            <span>
              <p>
                Polaroid hot chicken helvetica, sriracha messenger bag vape banh
                mi keffiyeh art party.
              </p>
              <p className="postDate">April 17, 2018</p>
            </span>
          </section>
        </>
      ) : (
        <>
          <section className="recentPostWrap">
            <FaTwitter />
            <span>
              <p>
                Polaroid hot chicken helvetica, sriracha messenger bag vape banh
                mi keffiyeh art party.
              </p>
              <p className="postDate">5 hours ago</p>
            </span>
          </section>
          <section className="recentPostWrap">
            <FaTwitter />
            <span>
              <p>
                Polaroid hot chicken helvetica, sriracha messenger bag vape banh
                mi keffiyeh art party.
              </p>
              <p className="postDate">2 hours ago</p>
            </span>
          </section>
        </>
      )}
    </RecentPostsStyle>
  );
};

export default RecentPosts;
