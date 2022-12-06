import styled from "styled-components";
import { Container_main } from "../../styled/generalStyled";

const containerGlobalFooter = styled.section`
  width: 100%;
  position: relative;
  /* overflow: hidden; */
  :before {
    transition: 0.5s ease-in-out;
    position: absolute;
    content: "";
    background: radial-gradient(
      circle,
      rgba(219, 103, 36, 0.2763480392156863) 0%,
      rgba(219, 103, 36, 0.12788865546218486) 36%,
      rgba(17, 15, 14, 0.1) 61%
    );
    width: 400px;
    height: 400px;
    right: 0;
    bottom: 1%;
    z-index: -1;
    @media (max-width: 900px) {
      width: 350px;
      height: 350px;
    }
    @media (max-width: 800px) {
      width: 300px;
      height: 300px;
    }
    @media (max-width: 680px) {
      right: -30%;
      bottom: -40%;
    }
    @media (max-width: 680px) {
      width: 250px;
      height: 250px;
    }
  }
`;
const PartySection = styled(Container_main)`
  transition: 0.5s ease-in-out;
  padding: 0;
  height: 400px;
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr 3fr;
  @media (max-width: 1200px) {
    padding: 0 4rem;
  }
  @media (max-width: 800px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;

const InfoParty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 2rem;
  @media (max-width: 800px) {
    text-align: center;
  }
`;

const Info_logo_footer = styled.a`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: start;
  @media (max-width: 800px) {
    justify-content: center;
  }
`;

const Info_logo_img_footer = styled.img`
  width: 20px;
`;
const Info_logo_name_footer = styled.a`
  transition: 0.2s ease-in-out;
  font-size: 1.3rem;
  font-family: var(--lexend);
  color: var(--first_color);
`;

const Info_logo_text_footer = styled.p`
  color: var(--withe_color);
  font-family: var(--lexend);
  max-width: 20ch;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const Contact_party = styled.div`
  align-self: stretch;
  margin-left: 3rem;
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  @media (max-width: 800px) {
    margin-left: initial;
  }
`;
const SocialPartyList = styled.ul`
  transition: 0.5s ease-in-out;
  display: flex;
  width: 100%;
  gap: 1rem;
  justify-content: start;
  padding-top: 3rem 0;
  margin-top: 4rem;
  @media (max-width: 1200px) {
    padding-top: 0;
    margin-top: 0;
  }
`;
const SocialPartyItems = styled.li``;

const linkSocialParty = styled.a`
  padding: 0.5rem;
`;

const Right_img = styled.img`
  transition: 0.5s ease-in-out;
  width: 300px;
  position: absolute;
  right: -1%;
  bottom: 0%;
  z-index: -1;
  @media (max-width: 1200px) {
    width: 200px;
  }
  @media (max-width: 680px) {
    width: 180px;
  }
  @media (max-width: 680px) {
    width: 130px;
    bottom: -25%;
  }
`;

export {
  containerGlobalFooter,
  PartySection,
  InfoParty,
  Info_logo_footer,
  Info_logo_img_footer,
  Info_logo_name_footer,
  Info_logo_text_footer,
  Contact_party,
  SocialPartyList,
  SocialPartyItems,
  linkSocialParty,
  Right_img,
};
