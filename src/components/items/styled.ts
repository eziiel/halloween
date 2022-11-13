import styled from "styled-components";
import { Container_main } from "../../styled/generalStyled";

const ItemsSection = styled(Container_main).attrs({as: "section"})`
  width: 100%;
  padding: 8rem 0;
`

const ListItems = styled.ul`
  background: blue;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`

export { ListItems, ItemsSection}