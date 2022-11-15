import styled from "styled-components";
import { Container_main } from "../../../styled/generalStyled";

const ItemsSection = styled(Container_main).attrs({as: "section"})`
  width: 100%;
  padding: 8rem 0;
  position: relative;
  :after{
    position: absolute;
    content: "";
    background: radial-gradient(circle, rgba(219,103,36,0.1) 0%, rgba(219,103,36,0.1) 36%, rgba(17,15,14,0.2959558823529411) 61%);
    z-index: -1;
    width: 800px;
    height: 800px;
    right: -30%;
    top: -40%;
  }
`

const ListItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`

export { ListItems, ItemsSection}