import * as N from "./styled"
import Nav_data from "../../../public/data/nav_header.json"

const NavHeader: React.FC = () => {
  return (
    <N.Nav_header>
      <N.List_nav>
        {Nav_data.map(({  list_item }) => (
          <N.List_item_nav key={list_item} >
            <N.Link_nav_header href={`#${list_item}`}>
              {list_item}
            </N.Link_nav_header>
          </N.List_item_nav>
        ))}
      </N.List_nav>
    </N.Nav_header>
  )
}

export default NavHeader
