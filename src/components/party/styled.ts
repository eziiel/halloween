import styled from "styled-components";
import { Container_main } from "../../styled/generalStyled";

const containerGlobalFooter = styled.footer`
  width: 100%;
  overflow: hidden;
`;
const PartySection = styled(Container_main).attrs({ as: "footer" })`
  padding: 0;
  height: 400px;
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr 3fr;
  position: relative;
  @media (max-width: 1200px) {
    padding: 0 4rem;
  }
`;

const InfoParty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 2rem;
`;

const Info_logo_footer = styled.a`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: start;
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
  margin-left: 3rem;
  display: flex;
  justify-content: space-around;
`;
const SocialPartyList = styled.ul`
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

const FooterParty = styled.div`
  grid-column: 1/-1;
  grid-row: 2;
  font-family: var(--lexend);
  font-size: 0.875rem;
  @media (max-width: 1200px) {
    text-align: center;
  }
  :after {
    position: absolute;
    content: "";
    background: radial-gradient(
      circle,
      rgba(219, 103, 36, 0.2763480392156863) 0%,
      rgba(219, 103, 36, 0.12788865546218486) 36%,
      rgba(17, 15, 14, 0.2959558823529411) 61%
    );
    width: 700px;
    height: 700px;
    left: -50%;
    bottom: -70%;
    z-index: -2;
    @media (max-width: 1200px) {
      width: 400px;
      height: 400px;
      left: -20%;
      bottom: -30%;
    }
  }
  :before {
    position: absolute;
    content: "";
    background: radial-gradient(
      circle,
      rgba(219, 103, 36, 0.2763480392156863) 0%,
      rgba(219, 103, 36, 0.12788865546218486) 36%,
      rgba(17, 15, 14, 0.2959558823529411) 61%
    );
    width: 600px;
    height: 600px;
    z-index: -1;
    right: -60%;
    bottom: -40%;
    z-index: -2;
    @media (max-width: 1200px) {
      width: 400px;
      height: 400px;
      right: -20%;
      bottom: -10%;
    }
  }
`;

const Left_img = styled.img`
  width: 250px;
  position: absolute;
  left: -30%;
  bottom: -5%;
  z-index: -1;
  @media (max-width: 1200px) {
    width: 150px;
    left: 0%;
    bottom: -5%;
  }
`;

const Right_img = styled.img`
  width: 300px;
  position: absolute;
  right: -43%;
  bottom: 20%;
  z-index: -1;
  @media (max-width: 1200px) {
    width: 150px;
    right: -2%;
    bottom: 35%;
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
  FooterParty,
  Left_img,
  Right_img,
};
