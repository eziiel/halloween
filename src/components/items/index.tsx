import React from 'react'
import { ItemsSecond } from './items-second'
import { ShowItems } from './showItems'
import * as S from "./styled"

export const Items  = () => {
  return (
    <S.ItemsMain>
      <ShowItems />
      <ItemsSecond />
    </S.ItemsMain>
  )
}
