import React from 'react'
import { Button } from '../../assets/button'
import { Info_div, Text_info_p, Title_size2 } from '../../styled/generalStyled'
import About_scare from "../../../public/images/about-scare.png"
import * as S from "./styled"

export const About = () => {
  return (
    <S.About_section id="about_us">
      <S.Img_about_section src={About_scare} alt=""/>
      <Info_div>
        <Title_size2> About the night of terror</Title_size2>
        <Text_info_p>
          Halloween is celebrated every October 31 at night, walk around the city
          with your friends and trick or treat, enjoy this celebration under the 
          full moon.
        </Text_info_p>
        <Button 
          text="explore now!!!" 
          backColor="--white_color"
          padding="1rem 0.8rem"
          size="--first_size"
          color="--first_color"/>
      </Info_div>
    </S.About_section>
  )
}
