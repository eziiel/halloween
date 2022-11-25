import styled from "styled-components";
import { Container_main } from "../../../styled/generalStyled";

const ItemsSecondSection = styled(Container_main).attrs({ as: "section" })`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  :after {
    position: absolute;
    content: "";
    background: radial-gradient(
      circle,
      rgba(219, 103, 36, 0.2763480392156863) 0%,
      rgba(219, 103, 36, 0.12788865546218486) 36%,
      rgba(17, 15, 14, 0.1) 61%
    );
    color: red;
    width: 700px;
    height: 700px;
    z-index: -1;
    left: -40%;
    top: -30%;
    transition: 0.5s ease-in-out;
    @media (max-width: 1200px) {
      left: -20%;
      top: -20%;
      width: 450px;
      height: 450px;
    }
  }
  @media(max-width:680px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
const ImagesItemsSecond = styled.img`
  width: 500px;
  transition: 0.5s ease-in-out;
  @media (max-width: 1200px) {
    width: 300px;
  }
  @media (max-width: 680px) {
    width: 200px;
  }
  @media(max-width:600px) {
    width: 150px;
  }
`;
const ImgStars = styled.img`
  width: 90px;
  position: absolute;
  right: 50%;
  top: 20%;
  transform: rotate(-30deg);
  transition: 0.5s ease-in-out;
  @media (max-width: 1200px) {
    width: 45px;
    right: 43%;
  }
  @media (max-width: 680px) {
    width: 30px;
    right: 40%;
    top: 30%;
  }
  @media(max-width:600px) {
    right: 20%;
    top: 75%;
  }
`;
const ImgStarsSecond = styled.img`
  width: 90px;
  right: -30px;
  bottom: 20%;
  transform: rotate(30deg);
  position: absolute;
  transition: 0.5s ease-in-out;
  @media (max-width: 1200px) {
    width: 45px;
    right: 5%;
  }
  @media (max-width: 680px) {
    width: 30px;
    right: 2%;
    bottom: 30%;
  }
  @media(max-width:600px) {
    left: 20%;
  }
`;

export { ItemsSecondSection, ImagesItemsSecond, ImgStars, ImgStarsSecond };
