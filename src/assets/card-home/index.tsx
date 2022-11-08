import React from 'react'
import * as S from "./styled"

interface Data_card {
  img:string,
  text:string
}


export const CardHome = ({ img, text}:Data_card) => {
  return (
    <S.Card>
      <S.Img_card src={img} alt={img}/>
      <S.Info_card>
        {text}
      </S.Info_card>
    </S.Card>
  )
}
