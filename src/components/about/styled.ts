import styled from "styled-components";
import { Container_main } from "../../styled/generalStyled";

const About_section = styled(Container_main).attrs({as : "section"})`
  display: flex;
  align-items: center;
  gap: 2rem;
`
const Img_about_section = styled.img`
  width: 650px;
`
const Info_about_section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`
const Text_info_about = styled.p`
  font-family: var(--lexend);
  text-align: center;
`

export {
  About_section,
  Img_about_section,
  Info_about_section,
  Text_info_about
}