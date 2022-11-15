import styled from "styled-components";
import { Container_main } from "../../styled/generalStyled";

const About_section = styled(Container_main).attrs({as : "section"})`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 8rem 0;
`
const Img_about_section = styled.img`
  width: 650px;
`

export {
  About_section,
  Img_about_section
}