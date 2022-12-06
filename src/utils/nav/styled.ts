import styled, { css } from "styled-components";

interface Status {
  status:boolean
}

const Nav_header = styled.nav<Status>`
  display: flex;
  font-size: var(--first_size);
  align-items: center;
  @media (max-width: 600px) {
    display: none;
    ${props => props.status && css`
      display: flex;
    `}
    justify-content: center;
    position: absolute;
    width: 100%;
    top: 90%;
    left: 0;
    padding: 2rem 0;
    backdrop-filter: blur(30px);
}
`;
const List_nav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const List_item_nav = styled.li``;
const Link_nav_header = styled.a`
  transition: 0.2s ease-in-out;
  color: var(--withe_color);
  padding: 1rem;
  @media (max-width: 600px) {
    padding: 1rem 2rem;
  }
  letter-spacing: 1px;
  :hover {
    color: var(--first_color);
  }
`;

const NavBat = styled.img`
  width: 100px;
  transform: rotate(-50deg);
  position: absolute;
  left: 20%;
  display: none;
  @media (max-width: 600px) {
    display: initial;
  }
`

export { Nav_header, List_nav, List_item_nav, Link_nav_header, NavBat };
