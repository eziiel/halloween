import styled from "styled-components";
import { Container_main, Title_size2 } from "../../../styled/generalStyled";

const ItemsSecondSection = styled(Container_main).attrs({as: "section"})`
  width: 100%;
  padding: 8rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  :before{
    position: absolute;
    content: "";
    background: radial-gradient(circle, rgba(219,103,36,0.2763480392156863) 0%, rgba(219,103,36,0.12788865546218486) 36%, rgba(17,15,14,0.2959558823529411) 61%);
    color: red;
    width: 700px;
    height: 700px;
    z-index: -1;
    left: -40%;
    top: -30%;
  }
`
const ImagesItemsSecond = styled.img`
  width: 500px;
`
const ImgStars = styled.img`
  width: 90px;
  position: absolute;
  right: 50%;
  top: 20%;
  transform: rotate(-30deg);
`
const ImgStarsSecond = styled.img`
  width: 90px;
  right: -30px;
  bottom: 20%;
  transform: rotate(30deg);
  position: absolute;
`


export { ItemsSecondSection, ImagesItemsSecond, ImgStars, ImgStarsSecond }