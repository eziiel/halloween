import React from 'react'
import { Button } from '../../assets/button'
import { Title_size2 } from '../../styled/generalStyled'
import About_scare from "../../../public/images/about-scare.png"
import * as S from "./styled"

export const About = () => {
  return (
    <S.About_section id="about_us">
      <S.Img_about_section src={About_scare} alt=""/>
      <S.Info_about_section>
        <Title_size2> About the night of terror</Title_size2>
        <S.Text_info_about>
          Halloween is celebrated every October 31 at night, walk around the city
          with your friends and trick or treat, enjoy this celebration under the 
          full moon.
        </S.Text_info_about>
        <Button 
          text="Explore now!!!" 
          backColor="--white_color"
          width="160px"
          height="50px"
          size="--first_size"
          color="--first_color"/>
      </S.Info_about_section>
    </S.About_section>
  )
}
