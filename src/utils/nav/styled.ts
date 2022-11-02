import styled from "styled-components"

const Nav_header = styled.nav`
  font-size:var(--medium_size);
`
const List_nav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`

const List_item_nav = styled.li`

`
const Link_nav_header = styled.a`
  transition: 0.2s ease-in-out;
  color: var(--withe_color);
  padding: 1rem;
  :hover{
    color: var(--first_color);
  }
`

export { Nav_header, List_nav, List_item_nav, Link_nav_header }
