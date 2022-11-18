import styled from "styled-components";
import { Container_main } from "../../../styled/generalStyled";

const ItemsSection = styled(Container_main).attrs({as: "section"})`
  width: 100%;
  position: relative;
  :after{
    position: absolute;
    content: "";
    background: radial-gradient(circle, rgba(219,103,36,0.2763480392156863) 0%, rgba(219,103,36,0.12788865546218486) 36%, rgba(17,15,14,0.2959558823529411) 61%);
    z-index: -1;
    width: 800px;
    height: 800px;
    right: -60%;
    top: -30%;
  }
`

const ListItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`

export { ListItems, ItemsSection}