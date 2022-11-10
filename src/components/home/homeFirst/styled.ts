import styled from "styled-components";
import { Container_main } from "../../../styled/generalStyled";



//first_section
const Home_first_section = styled(Container_main)`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: var(--lexend);
  :after{
    position: absolute;
    content: "";
    background: radial-gradient(circle, rgba(219,103,36,0.304359243697479) 0%, rgba(219,103,36,0.12788865546218486) 39%, rgba(17,15,14,0.2959558823529411) 68%);
    width: 400px;
    height: 400px;
    z-index: -1;
    left: -50px;
    top: 10%;
  }
  :before{
    position: absolute;
    content: "";
    background: radial-gradient(circle, rgba(219,103,36,0.304359243697479) 0%, rgba(219,103,36,0.12788865546218486) 39%, rgba(17,15,14,0.2959558823529411) 68%);
    width: 400px;
    height: 400px;
    z-index: -1;
    right: 0;
    top: 30%;
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
  :first-child{
    padding-bottom: 2rem;
  }
`
const Title = styled.h1`
  font-family: var(--crepster);
  font-size: 4rem;
  letter-spacing: 2px;
  font-weight: 500;
  color: var(--first_color_alt);
`
const SubTitle_first_home = styled.h2`
  font-size: 3rem;
  letter-spacing: 1px;
`

const Text_first_home = styled.p`
  max-width: 40ch;
  text-align: center;
  letter-spacing: 0.5px;
  line-height: 1.5;
`


const img_first_home = styled.img`
  width: 500px;
`;

const img_second_first_home = styled.img`
  width: 300px;
  position: absolute;
  left: -15px;
  top: 25%;
`;

const img_thirdy_first_home = styled.img`
  width: 300px;
  position: absolute;
  right: -15px;
  top: 15%;
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
