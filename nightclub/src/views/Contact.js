import styled from "styled-components";
import UnderSideHeadline from "../components/common/UnderSideHeadline";
import ContactForm from "../components/contactview/ContactForm";
import ContactInfo from "../components/contactview/ContactInfo";
const ContactStyles = styled.main`
  .flex {
    display: flex;
    padding: 5vh 10vw;
  }
`;
const Contact = () => {
  return (
    <ContactStyles>
      <UnderSideHeadline headline="Contact us" />
      <div className="flex">
        <ContactForm />
        <ContactInfo />
      </div>
    </ContactStyles>
  );
};

export default Contact;
