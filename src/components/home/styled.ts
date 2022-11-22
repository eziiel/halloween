import styled from "styled-components";
import { Container_main } from "../../styled/generalStyled";

const Home_main = styled(Container_main).attrs({as: "main"})`
  transition: 0.5s ease-in-out;
  margin-top: 5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`

export { Home_main }