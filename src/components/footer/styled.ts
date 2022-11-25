import styled from "styled-components";
import { Container_main } from "../../styled/generalStyled";

const FooterContent = styled.footer`
  width: 100%;
  position: relative;
  padding: 3rem 0;
  overflow: hidden;
`

const FooterParty = styled(Container_main)`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--lexend);
  font-size: 0.875rem;
  transition: 0.5s ease-in-out;
  @media (max-width: 1200px) {
    text-align: center;
  }
  @media (max-width: 800px) {
    align-items: center;
  }
  :after {
    position: absolute;
    content: "";
    transition: 0.5s ease-in-out;
    background: radial-gradient(
      circle,
      rgba(219, 103, 36, 0.2763480392156863) 0%,
      rgba(219, 103, 36, 0.12788865546218486) 36%,
      rgba(17, 15, 14, 0.1) 61%
    );
    width: 400px;
    height: 400px;
    left: 5%;
    bottom: -40%;
    z-index: -2;
    @media (max-width: 800px) {
      left: -2%;
      width: 350px;
      height: 350px;
    }
  }
`;

const Left_img = styled.img`
  transition: 0.5s ease-in-out;
  width: 250px;
  position: absolute;
  left: 5%;
  bottom: -4%;
  z-index: -1;
  @media (max-width: 1200px) {
    width: 150px;
  }
  @media (max-width: 800px) {
    width: 200px;
    bottom: -4%;
  }
  @media(max-width:680px) {
    width: 180px;
  }
  @media(max-width:680px) {
    width: 130px;
  }
`;

export { FooterContent, FooterParty, Left_img }