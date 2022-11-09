import React from 'react'
import * as S from "./styled"
import Data_card from "../../../../public/data/card_data.json"
import { CardHome } from '../../../assets/card-home'

export const HomeSecond = () => {
  return (
    <S.Home_second>
      <S.Title>
        chose your <br/> spooky category
      </S.Title>
      <S.List>
      {Data_card.map(({ img, subTitle, infoText }) =>(
         <li key={img}>
         <CardHome
           img= {img}
           subTitle= {subTitle}
           infoText= {infoText}
         />
       </li>
      ))}
      </S.List>
    </S.Home_second>
  )
}
