import styled from "styled-components";
import { Container_main } from "../../styled/generalStyled";

const About_section = styled(Container_main).attrs({as : "section"})`
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 1200px) {
    padding: 0 2rem;
  }
  @media (max-width: 650px) {
    flex-direction: column;
  }
`
const Img_about_section = styled.img`
  width: 650px;
  transition: 0.5s ease-in-out;
  @media (max-width: 1200px) {
    width: 400px;
  }
  @media (max-width: 800px) {
    width: 350px;
  }
`

export {
  About_section,
  Img_about_section
}