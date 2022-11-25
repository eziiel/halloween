import styled from "styled-components";
import { Container_main } from "../../../styled/generalStyled";

const Home_first_section = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: var(--lexend);
  transition: 0.5s ease-in-out;
  :after {
    transition: 0.5s ease-in-out;
    position: absolute;
    content: "";
    background: radial-gradient(
      circle,
      rgba(219, 103, 36, 0.2763480392156863) 0%,
      rgba(219, 103, 36, 0.12788865546218486) 36%,
      rgba(17, 15, 14, 0.1) 61%
    );
    width: 600px;
    height: 600px;
    z-index: -3;
    left: -10%;
    top: 9%;
    @media(max-width:1450px) {
      width: 500px;
      height: 500px;
    }
    @media(max-width:1200px) {
      width: 400px;
      height: 400px;
    }
    @media(max-width:800px) {
      width: 300px;
      height: 300px;
    }
  }
  :before {
    transition: 0.5s ease-in-out;
    position: absolute;
    content: "";
    background: radial-gradient(
      circle,
      rgba(219, 103, 36, 0.2763480392156863) 0%,
      rgba(219, 103, 36, 0.12788865546218486) 36%,
      rgba(17, 15, 14, 0.1) 61%
    );
    width: 600px;
    height: 600px;
    z-index: -3;
    right: -10%;
    top: 30%;
    @media(max-width:1450px) {
      width: 500px;
      height: 500px;
    }
    @media(max-width:1200px) {
      width: 400px;
      height: 400px;
    }
    @media(max-width:800px) {
      width: 300px;
      height: 300px;
    }
  }
`;

const intro_first_home = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

const img_title = styled.img`
  width: 40px;
  :first-child {
    padding-bottom: 2rem;
  }
  @media(max-width:1200px) {
      width: 30px;
  }
`;
const Title = styled.h1`
  font-family: var(--crepster);
  font-size: 4rem;
  letter-spacing: 2px;
  font-weight: 500;
  color: var(--first_color_alt);
  transition: 0.5s ease-in-out;
  @media(max-width:1200px) {
    font-size: 3em;
  }
`;
const SubTitle_first_home = styled.h2`
  font-size: 3rem;
  letter-spacing: 1px;
  transition: 0.5s ease-in-out;
  @media(max-width:1200px) {
    font-size: 2rem;
  }
  @media(max-width:800px) {
    font-size: 1.5rem;
  }
`;

const Text_first_home = styled.p`
  max-width: 40ch;
  text-align: center;
  letter-spacing: 0.5px;
  line-height: 1.5;
  transition: 0.5s ease-in-out;
  @media(max-width:1200px) {
    font-size: 0.875rem;
  }
  @media(max-width:800px) {
    font-size: 0.8rem;
  }
`;

const img_first_home = styled.img`
  width: 500px;
  padding: 2rem 0;
  transition: 0.5s ease-in-out;
  @media(max-width:1200px) {
    width: 300px;
  }
  @media(max-width:680px) {
    width: 200px;
  }
`;

const img_second_first_home = styled.img`
  width: 300px;
  position: absolute;
  left: -15px;
  top: 25%;
  transition: 0.5s ease-in-out;
  z-index: -2;
  @media(max-width:1200px) {
    width: 200px;
  }
  @media(max-width:680px) {
    width: 150px;
  }
  @media(max-width:800px) {
    width: 120px;
  }
`;

const img_thirdy_first_home = styled.img`
  width: 300px;
  position: absolute;
  right: -15px;
  top: 15%;
  transition: 0.5s ease-in-out;
  z-index: -2;
  @media(max-width:1200px) {
    width: 200px;
  }
  @media(max-width:680px) {
    width: 150px;
  }
  @media(max-width:800px) {
    width: 120px;
    top: 10%;
  }
`;

//second_section

export {
  Home_first_section,
  Title,
  intro_first_home,
  img_title,
  SubTitle_first_home,
  Text_first_home,
  img_first_home,
  img_second_first_home,
  img_thirdy_first_home,
};
