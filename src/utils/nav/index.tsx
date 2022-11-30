import * as N from "./styled"
import Nav_data from "../../../public/data/nav_header.json"
import NavBatImag from "../../../public/images/nav-bat.png" 

interface Status {
  status:boolean
}
function NavHeader ({status}: Status) {
  return (
    <N.Nav_header status={status}>
      <N.NavBat src={NavBatImag} alt="nav bat"/>
      <N.List_nav>
        {Nav_data.map(({ name_item, list_item }) => (
          <N.List_item_nav key={ list_item} >
            <N.Link_nav_header href={`#${name_item}`}>
              {list_item}
            </N.Link_nav_header>
          </N.List_item_nav>
        ))}
      </N.List_nav>
    </N.Nav_header>
  )
}

export default NavHeader
