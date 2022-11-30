import React from 'react'
import Logo from "../../../public/images/logo-skull.png"
import NavHeader from "../../utils/nav"
import * as S from "./styled"

const Header = () => {
  const [statusMenu, setStatusMenu] = React.useState(false)

  const handleDropMenu = () => {
    setStatusMenu(!statusMenu)
  }
  return (
    <S.Header_fixed_content>
      <S.Header_halloween>
        <S.Logo_Header href="#home">
          <S.Logo_img src={Logo} alt="logo-skull" />
          <S.Logo_name>
            halloween
          </S.Logo_name>
        </S.Logo_Header>
        <S.DropMenu onClick={handleDropMenu}>
          <S.StripeDropMenu />
        </S.DropMenu>
        <NavHeader status={statusMenu}/>
      </S.Header_halloween>
    </S.Header_fixed_content>
  )
}

export default Header
