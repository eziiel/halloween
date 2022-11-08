import styled from "styled-components";
import { Container_main } from "../../../styled/generalStyled";

const Home_second = styled(Container_main)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  font-family: var(--crepster);
  font-size: 3rem;
  letter-spacing: 2px;
  font-weight: 500;
  color: var(--first_color_alt);
  max-width: 25ch;
  text-align: center;
`

export { Home_second, Title }