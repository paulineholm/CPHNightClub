import styled from "styled-components";
import SectionHead from "../SectionHead";
import Thumb1 from "../../../assets/thumb1.jpg";
import Thumb2 from "../../../assets/thumb2.jpg";
import Thumb3 from "../../../assets/restaurant_1.jpg";
import OverlayBox from "./OverlayBox";
const Section1Style = styled.section`
  padding-top: 5vh;
  padding-bottom: 5vh;
  .flexContainer {
    margin-left: 10vw;
    margin-right: 10vw;
    display: flex;
    justify-content: space-between;
  }
`;
const Section1 = () => {
  return (
    <Section1Style>
      <SectionHead headline="Welcome in night" modified="Club" />{" "}
      <div className="flexContainer">
        <OverlayBox
          imgSrc={Thumb1}
          altTxt="Fine Dining"
          nightClub
          title="Night Club"
          text=" Shoreditch vexillologist typewriter tofu, meggings literally
                  hoodie DIY umami tacos banjo bicycle rights tbh portland.
                  Whatever poutine raclette sustainable, pug celiac palo santo."
        />
        <OverlayBox
          imgSrc={Thumb3}
          altTxt="Trendy Dining"
          restaurant
          title="Restaurant"
          text="Sustainable XOXO knausgaard, tattooed vegan brooklyn tilde. Yr
          sriracha subway tile listicle portland chartreuse microdosing,
          messenger bag humblebrag XOXO celiac tacos"
        />
        <OverlayBox
          imgSrc={Thumb2}
          altTxt="Bar"
          bar
          title="Bar"
          text="Butcher taxidermy microdosing, drinking vinegar poke art party
          normcore artisan VHS yr stumptown pour-over neutra migas. Lomo
          lyft meggings squid."
        />
      </div>
    </Section1Style>
  );
};

export default Section1;
