import React from "react";
import { CardItems } from "../../../assets/card-items";
import DataItems from "../../../../public/data/card_items.json";
import * as S from "./styled";

export const Items = () => {
  return (
    <S.ItemsSection id="items">
      <S.ListItems>
        {DataItems.map(({ img, price, statusLiked, subTitle }) => (
          <CardItems
            key={subTitle}
            img={img}
            subTitle={subTitle}
            price={price}
            statusLiked={statusLiked}
          />
        ))}
      </S.ListItems>
    </S.ItemsSection>
  );
};
