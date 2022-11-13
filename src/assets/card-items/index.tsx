import React from 'react'
import * as S from "./styled"
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { Button } from '../button';

interface Data_card_item {
  subTitle:string
  img:string
  price:string
  statusliked:boolean
}


export const CardItems = ({ img, subTitle, price, statusliked}:Data_card_item) => {
  return (
    <S.Card_item>
      <S.Img_card_item src={img} alt={subTitle}/>
      <S.Title_card_item>
        {subTitle}
      </S.Title_card_item>
      <S.Price_card_item>
        {price}
      </S.Price_card_item>
      <Button 
          text={statusliked ? <IoIosHeart size="20px"/> : <IoIosHeartEmpty size="20px"/>}
          backColor=""
          width="70px"
          height="30px"
          size="--first_size"
          color="--first_color"/>
          
    </S.Card_item>
  )
}
