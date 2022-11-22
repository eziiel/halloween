import styled from "styled-components";
import { Container_main } from "../../styled/generalStyled";

const About_section = styled(Container_main).attrs({as : "section"})`
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: center;
`
const Img_about_section = styled.img`
  width: 650px;
  transition: 0.5s ease-in-out;
  @media (max-width: 1200px) {
    width: 400px;
    }
`

export {
  About_section,
  Img_about_section
}