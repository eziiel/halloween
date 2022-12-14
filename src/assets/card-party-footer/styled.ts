import styled from "styled-components";

interface Direction {
  direction:string
}
const Card_party_footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: var(--lexend);
  text-transform: capitalize;
`;

const Title_party_footer = styled.h3`
  font-size: var(--medium_size);
  @media (max-width: 500px) {
    font-size:var(--first_size);
  }
`;

const List_party_footer = styled.ul<Direction>`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: start;
  @media (max-width: 500px) {
    font-size:0.750rem;
  }
`;

const Items_party_footer = styled.li`
  padding: 0.5rem 0;
  margin: 0.2rem 0;
  font-size: 0.875rem;
  color: #92989B;
  cursor: pointer;
`;

export {
  Card_party_footer,
  Title_party_footer,
  List_party_footer,
  Items_party_footer,
};
