import styled from "styled-components";
import { motion } from "framer-motion";
import HeroBg1 from "../../../assets/header_bg_1.jpg";
import HeroBg2 from "../../../assets/header_bg_2.jpg";
import HeroLogo from "../../../assets/LogoHero.svg";
import HeroLogoLine from "../../../assets/bottom_line.png";
const heroBgs = [`${HeroBg1}`, `${HeroBg2}`];
const random_heroBg = heroBgs[Math.floor(Math.random() * heroBgs.length)];
const HeroStyle = styled.section`
  background-image: url(${random_heroBg});
  background-position: center;
  background-size: cover;
  height: 60vh;
  text-align: center;
  justify-content: center;
  .heroLogo {
    padding-top: 20vh;
  }
  .bottomLogo {
    font-size: 2rem;
    font-family: "Ubuntu Light";
    letter-spacing: 1.5rem;
    text-transform: uppercase;
    padding: 1rem;
  }
  .bottomLogoLine {
    width: 45vw;
  }
`;

const Hero = () => {
  return (
    <HeroStyle>
      <div className="heroLogo">
        <motion.img
          src={HeroLogo}
          alt="Night Club Logo"
          transition={{
            y: {
              duration: 1,
              ease: "easeIn",
            },
          }}
          animate={{ y: ["-40px", "0px"], opacity: 1 }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          transition={{
            delay: 1.3,
            y: {
              duration: 1,
              ease: "easeIn",
            },
          }}
          animate={{ y: ["-40px", "0px"], opacity: 1 }}
        >
          <p className="bottomLogo">Have a good time</p>
          <img src={HeroLogoLine} alt="" className="bottomLogoLine" />
        </motion.div>
      </div>
    </HeroStyle>
  );
};

export default Hero;
