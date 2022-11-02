import styled from "styled-components";
import { Container_main } from "../../styled/generalStyled";

const Header_fixed_content = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 6rem;
`

const Header_halloween = styled(Container_main).attrs({as:"div"})`
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
`

const Logo_Header = styled.a`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`
const Logo_img = styled.img`
  width: 20px;
`
const Logo_name = styled.span`
  transition: 0.2s ease-in-out;
  font-size: var(--second_size);
  :hover{
    color: var(--first_color);
  }
`



export { Header_halloween, Logo_Header, Logo_img, Logo_name, Header_fixed_content }