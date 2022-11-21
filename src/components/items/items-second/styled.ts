import styled from "styled-components";
import { Container_main } from "../../../styled/generalStyled";

const ItemsSecondSection = styled(Container_main).attrs({as: "section"})`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  :after{
    position: absolute;
    content: "";
    background: radial-gradient(circle, rgba(219,103,36,0.2763480392156863) 0%, rgba(219,103,36,0.12788865546218486) 36%, rgba(17,15,14,0.2959558823529411) 61%);
    color: red;
    width: 700px;
    height: 700px;
    z-index: -1;
    left: -40%;
    top: -30%;
    @media(max-width:1200px) {
      left: -20%;
      top: -20%;
      width: 450px;
      height: 450px;
    }
  }
`
const ImagesItemsSecond = styled.img`
  width: 500px;
  @media(max-width:1200px) {
    width: 300px;
  }
`
const ImgStars = styled.img`
  width: 90px;
  position: absolute;
  right: 50%;
  top: 20%;
  transform: rotate(-30deg);
  @media(max-width:1200px) {
    width: 45px;
    right: 43%;
  }
`
const ImgStarsSecond = styled.img`
  width: 90px;
  right: -30px;
  bottom: 20%;
  transform: rotate(30deg);
  position: absolute;
  @media(max-width:1200px) {
    width: 45px;
    right: 5%;
  }
`


export { ItemsSecondSection, ImagesItemsSecond, ImgStars, ImgStarsSecond }