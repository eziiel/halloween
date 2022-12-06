import styled from "styled-components";
import { Container_main } from "../../../styled/generalStyled";

const Home_second = styled(Container_main)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap:5rem;
  position: relative;
  :before{
    position: absolute;
    transition: 0.5s ease-in-out;
    content: "";
    background: radial-gradient(circle, rgba(219,103,36,0.2763480392156863) 0%, rgba(219,103,36,0.12788865546218486) 36%, rgba(17,15,14,0.2959558823529411) 61%);
    color: red;
    width: 700px;
    height: 700px;
    z-index: -1;
    left: -60%;
    top: -30%;
    @media(max-width:1200px) {
      left: -20%;
      top: -10%;
      width: 450px;
      height: 450px;
    }
    @media(max-width:800px) {
      width: 300px;
      height: 300px;
    }
    @media (max-width: 400px) {
      top: 5%;
      width: 300px;
      height: 300px;
      right: 5%;
    }
  }
  :after{
    position: absolute;
    content: "";
    background: radial-gradient(circle, rgba(219,103,36,0.2763480392156863) 0%, rgba(219,103,36,0.12788865546218486) 36%, rgba(17,15,14,0.2959558823529411) 61%);
    transition: 0.5s ease-in-out;
    color: red;
    width: 800px;
    height: 800px;
    z-index: -1;
    right: -60%;
    bottom: -70%;
    @media(max-width:1200px) {
      right: -20%;
      bottom: -30%;
      width: 450px;
      height: 450px;
    }
    @media(max-width:800px) {
      width: 300px;
      height: 300px;
    }
    @media (max-width: 400px) {
      bottom: -10%;
      width: 250px;
      height: 250px;
      right: 5%;
    }
  }
`

const List = styled.ul`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 2rem;
  }
`

export { Home_second, List }