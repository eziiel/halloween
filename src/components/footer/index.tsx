import React from 'react'
import * as S from "./styled"
import LeftImg from "../../../public/images/footer-tree2.png"

export const Footer = () => {
  return (
    <S.FooterContent>
      <S.FooterParty>@Todos os direitos reservados</S.FooterParty>
      <S.Left_img src={LeftImg}/>
    </S.FooterContent>
  )
}


