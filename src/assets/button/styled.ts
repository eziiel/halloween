import styled from "styled-components";

interface DataButton {
  backColor: string;
  color: string;
  padding: string;
  size: string;
}

const ButtonDefault = styled.button<DataButton>`
  background: var(${(props) => props.backColor});
  color: var(${(props) => props.color});
  padding: ${(props) => props.padding};
  font-size: var(${(props) => props.size});
  border-radius: 50px;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
  cursor: pointer;
  border: none;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  :hover {
    background: var(${(props) => props.color});
    color: var(${(props) => props.backColor});
    box-shadow: 0 0 200px 0.2px var(${(props) => props.color});
  }
`;

export { ButtonDefault };
