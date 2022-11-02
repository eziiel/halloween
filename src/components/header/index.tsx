import Logo from "../../../public/images/logo-skull.png"
import NavHeader from "../../utils/nav"
import * as S from "./styled"

const Header = () => {
  return (
    <S.Header_fixed_content>
      <S.Header_halloween>
          <S.Logo_Header href="#home">
            <S.Logo_img src={Logo} alt="logo-skull" />
            <S.Logo_name>
              halloween
            </S.Logo_name>
          </S.Logo_Header>
          <NavHeader/>
      </S.Header_halloween>
    </S.Header_fixed_content>
  )
}

export default Header
