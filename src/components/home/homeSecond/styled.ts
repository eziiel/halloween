import styled from "styled-components";
import { Container_main } from "../../../styled/generalStyled";

const Home_second = styled(Container_main)`
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap:5rem;
  position: relative;
  :after{
    position: absolute;
    content: "";
    background: radial-gradient(circle, rgba(219,103,36,0.304359243697479) 0%, rgba(219,103,36,0.12788865546218486) 39%, rgba(17,15,14,0.2959558823529411) 68%);
    color: red;
    width: 800px;
    height: 800px;
    z-index: -1;
    left: -60%;
    top: -20%;
  }
`

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`

export { Home_second, List }