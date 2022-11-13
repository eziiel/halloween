import React from 'react'
import DataItems from "../../../public/data/card_items.json"
import { CardItems } from '../../assets/card-items'
import * as S from "./styled"

export const Items = () => {
  return (
    <S.ItemsSection id="items">
      <S.ListItems>
        {DataItems.map(({ img, price, statusliked, subTitle}) => (
          <CardItems 
            img={img}
            subTitle= {subTitle}
            price= {price}
            statusliked={statusliked}
          />
        ))}
      </S.ListItems>
    </S.ItemsSection>
  )
}
