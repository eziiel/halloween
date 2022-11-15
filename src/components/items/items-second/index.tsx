import CauldronImg from "../../../../public/images/party-cauldron.png";
import { Button } from "../../../assets/button";
import {
  Info_div,
  Text_info_p,
  Title_size2,
} from "../../../styled/generalStyled";
import * as S from "./styled";
// import Stars from "../../../../public/images/stars.png"

export const ItemsSecond = () => {
  return (
    <S.ItemsSecondSection>
      <Info_div>
        <Title_size2>
          halloween <br /> party 31 october
        </Title_size2>
        <Text_info_p>
          Organize a great halloween party and enjoy the creepiest night of
          terror with all your friends
        </Text_info_p>
        <Button
          text="start the party!!!"
          backColor="--white_color"
          padding="1rem 0.8rem"
          size="--first_size"
          color="--first_color"
        />
      </Info_div>
      <S.ImagesItemsSecond src={CauldronImg} alt="party-cauldron" />
    </S.ItemsSecondSection>
  );
};
