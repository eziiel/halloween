import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import * as S from "./styled";
import DataCardItems from "../../../public/data/card_items.json";
import React from "react";


interface Data_card_item {
  subTitle: string;
  img: string;
  price: string;
  statusLiked: boolean;
}

export const CardItems = ({
  img,
  subTitle,
  price,
  statusLiked,
}: Data_card_item) => {

  const [statusCardFan, setStatusCardFan] = React.useState(false)
  const HandleItemFan = ():void => {
    setStatusCardFan(!statusCardFan)
  }
  return (
    <S.Card_item>
      <S.Img_card_item src={img} alt={subTitle} />
      <S.ContentOverButtonStatus>
        <S.Title_card_item>{subTitle}</S.Title_card_item>
        <S.Price_card_item>{price}</S.Price_card_item>
        <S.Fan_card_item onClick={HandleItemFan}>
          {statusCardFan ? (
            <IoIosHeart size="20px" strokeWidth="25px" color="#fff"></IoIosHeart>
          ) : (
            <IoIosHeartEmpty size="20px" strokeWidth="25px" color="#fff" />
          )}
        </S.Fan_card_item>
      </S.ContentOverButtonStatus>
    </S.Card_item>
  );
};
