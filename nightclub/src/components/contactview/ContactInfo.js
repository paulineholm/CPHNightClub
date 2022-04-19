import styled from "styled-components";
import ContactInfoBox from "./ContactInfoBox";
const ContactInfoStyle = styled.div`
  width: 40vw;
  height: 30vh;
  margin-top: 2rem;
  text-align: center;
  display: flex;
  background: var(--magenta);
  section {
    width: 50vw;
  }
`;
const ContactInfo = () => {
  return (
    <ContactInfoStyle>
      <section className="contactInfoLeft">
        <ContactInfoBox location />
        <ContactInfoBox mobile />
      </section>
      <section className="contactInfoRight">
        <ContactInfoBox msg />
        <ContactInfoBox web />
      </section>
    </ContactInfoStyle>
  );
};

export default ContactInfo;
