import DataFooter from "../../../public/data/party_footer_items.json";
import Logo from "../../../public/images/logo-skull.png";
import { CardPartyItems } from "../../assets/card-party-footer";
import * as S from "./styled";

export const Party = () => {
  return (
    <S.PartySection id="party">
      <S.InfoParty>
        <S.Info_logo_footer>
          <S.Info_logo_img_footer src={Logo} alt="skull logo footer" />
          <S.Info_logo_name_footer href="#home">
            halloween
          </S.Info_logo_name_footer>
        </S.Info_logo_footer>
        <S.Info_logo_text_footer>
          Enjoy the spookiest night of your life.
        </S.Info_logo_text_footer>
      </S.InfoParty>
      <S.Contact_party>
        {DataFooter.map(({ title, items }) => (
          <CardPartyItems key={title} title={title} items={items} />
        ))}
      </S.Contact_party>
      <S.FooterParty>Todos os direitos reservados</S.FooterParty>
    </S.PartySection>
  );
};
