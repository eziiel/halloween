import React from 'react'
import * as S from "./styled"
import Data_card from "../../../../public/data/card_data.json"
import { CardHome } from '../../../assets/card-home'
import { Title_size2 } from '../../../styled/generalStyled'

export const HomeSecond = () => {
  return (
    <S.Home_second>
      <Title_size2>
        chose your <br/> spooky category
      </Title_size2>
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
