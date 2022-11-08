import React from 'react'
import HomeFirst from './homeFirst'
import { HomeSecond } from './homeSecond'
import * as S from "./styled"

export const HomeMain = () => {
  return (
    <S.Home_main>
      <HomeFirst />
      <HomeSecond />
    </S.Home_main>
  )
}
