import styled from "styled-components";
import { Container_main } from "../../../styled/generalStyled";

const Home_second = styled(Container_main)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap:5rem;
  `
const Title = styled.h2`
  font-family: var(--crepster);
  font-size: 3rem;
  letter-spacing: 2px;
  font-weight: 500;
  color: var(--first_color_alt);
  max-width: 25ch;
  text-align: center;
  `
const List = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`

export { Home_second, Title, List }