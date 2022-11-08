import * as S from "./styled"
import ImgFirst from "../../../../public/images/home-pumpkin.png"
import ImgLeft from "../../../../public/images/home-tree1.png"
import ImgRight from "../../../../public/images/home-tree2.png"
import Stars from "../../../../public/images/stars.png"
import { Button } from "../../../assets/button"


const HomeFirst = () => {
  return (
      <S.Home_first_section>
        <S.intro_first_home>
          <S.img_title src={Stars} alt="stars image"/>
          <S.Title>HALLOWEEN</S.Title>
          <S.img_title src={Stars} alt="stars image"/>
        </S.intro_first_home>
        <S.SubTitle_first_home>
          Trick Or Treat!!
        </S.SubTitle_first_home>
        <S.Text_first_home>
          This Halloween, enjoy trick-or-tracking with your friends and spend a 
          terrifyng night under the full moon.
        </S.Text_first_home>
        <Button 
          text="Explore now!!!" 
          backColor="--white_color"
          width="160px"
          height="50px"
          size="--first_size"
          color="--first_color"/>
        <S.img_first_home src={ImgFirst} alt="pumpkin image"/>
        <S.img_second_first_home src={ImgLeft} alt="tree image"/>
        <S.img_thirdy_first_home src={ImgRight} alt="tree image"/>
      </S.Home_first_section>
  )
};

export default HomeFirst