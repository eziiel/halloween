import styled from "styled-components";
import { Container_main } from "../../styled/generalStyled";

const Header_fixed_content = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 6rem;
  background: var(--body_color);
  z-index: 2;
`;

const Header_halloween = styled(Container_main).attrs({ as: "div" })`
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;
`;

const Logo_Header = styled.a`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  @media (max-width: 1100px) {
    padding: 1rem 0;
  }
`;
const Logo_img = styled.img`
  width: 20px;
`;
const Logo_name = styled.span`
  transition: 0.2s ease-in-out;
  font-size: var(--first_size);
  font-family: var(--lexend);
  letter-spacing: 1px;
  :hover {
    color: var(--first_color);
  }
`;
const DropMenu = styled.span`
  width: 100px;
  height: 50px;
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  @media (max-width: 600px) {
    display: flex;
  }
`;
const StripeDropMenu = styled.span`
  width: 50px;
  height: 3px;
  border-radius: 60px;
  background-color: var(--first_color);
  :after{
    content: "";
    position: absolute;
    top: 25%;
    left: 30%;
    width: 30px;
    height: 3px;
    border-radius: 60px;
    background: var(--first_color);
  }
  :before{
    content: "";
    position: absolute;
    top: 75%;
    left: 33%;
    width: 40px;
    height: 3px;
    border-radius: 60px;
    background: var(--first_color);
  }
`

export {
  Header_halloween,
  Logo_Header,
  Logo_img,
  Logo_name,
  Header_fixed_content,
  DropMenu,
  StripeDropMenu
};
