import React from 'react'
import * as S from "./styled"
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";

interface Data_card_item {
  title:string
  price:string
}


export const CardItems = ({ title, price}:Data_card_item) => {
  return (
    <S.Card_item>
      <S.Img_card_item></S.Img_card_item>
      <S.Title_card_item>
        {title}
      </S.Title_card_item>
      <S.Price_card_item>
        {price}
      </S.Price_card_item>
      <S.Buttom_card_item/>
    </S.Card_item>
  )
}
