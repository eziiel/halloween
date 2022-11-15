import styled from "styled-components";
import { Container_main, Title_size2 } from "../../../styled/generalStyled";

const ItemsSecondSection = styled(Container_main).attrs({as: "section"})`
  width: 100%;
  padding: 8rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

const InfoItemsSecond = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  padding: 5rem 0;
`


const ImagesItemsSecond = styled.img`
  width: 500px;
`


export { ItemsSecondSection, InfoItemsSecond, ImagesItemsSecond }