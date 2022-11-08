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
      <ul>
      {Data_card.map(({ img, info_text_card}) =>(
         <li key={img}>
         <CardHome
           img= {img}
           text= {info_text_card}
         />
       </li>
      ))}
      </ul>
    </S.Home_second>
  )
}
