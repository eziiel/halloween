import styled from "styled-components";
import { Container_main } from "../../styled/generalStyled";

const PartySection = styled(Container_main).attrs({ as: "footer" })`
  padding: 0;
  background: red;
  height: 500px;
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const InfoParty = styled.div`
  display: flex;
  flex-direction: column;
  background: blue;
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
`;

const Contact_party = styled.div`
  margin-left:3rem;
  display: flex;
  justify-content: space-between;
`;

const FooterParty = styled.div`
  grid-column: 1/-1;
  grid-row: 2;
`;

export {
  PartySection,
  InfoParty,
  Info_logo_footer,
  Info_logo_img_footer,
  Info_logo_name_footer,
  Info_logo_text_footer,
  Contact_party,
  FooterParty,
};
