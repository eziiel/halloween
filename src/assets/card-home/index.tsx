import React from 'react'
import * as S from "./styled"
import Stars from "../../../public/images/stars.png"

interface Data_card {
  img:string,
  subTitle:string
  infoText:string
}


export const CardHome = ({ img, subTitle, infoText}:Data_card) => {
  return (
    <S.Card>
      <S.Img_card src={img} alt={img}/>
      <S.Info_card>
        <S.Sub_title_card img={Stars}>
          {subTitle}
        </S.Sub_title_card>
        <S.Info_text>
          {infoText}
        </S.Info_text>
      </S.Info_card>
    </S.Card>
  )
}
