import styled from "styled-components";

interface DataButton {
  backColor: string;
  color: string;
  width: string;
  height: string;
  size: string;
}

const ButtonDefault = styled.button<DataButton>`
  background: var(${(props) => props.backColor});
  color: var(${(props) => props.color});
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: var(${(props) => props.size});
  border-radius: 50px;
  font-weight: 550;
  letter-spacing: 0.3px;
  text-align: center;
  cursor: pointer;
  border: none;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover{
    background: var(${(props) => props.color});
    color: var(${(props) => props.backColor});
    box-shadow: 0 0 200px 3px var(${(props) => props.color});
  }
`;

export { ButtonDefault };
