import DataFooter from "../../../public/data/party_footer_items.json";
import Logo from "../../../public/images/logo-skull.png";
import { CardPartyItems } from "../../assets/card-party-footer";
import * as S from "./styled";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import LeftImg from "../../../public/images/footer-tree2.png"
import RightImg from "../../../public/images/footer-tree1.png"

export const Party = () => {
  return (
    <S.containerGlobalFooter>

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
          <S.SocialPartyList>
            <S.SocialPartyItems>
              <S.linkSocialParty href="www.facebook.com" target="_blank">
                <IoLogoFacebook size="30px" color="#db6724"/>
              </S.linkSocialParty>
            </S.SocialPartyItems>
            <S.SocialPartyItems>
              <S.linkSocialParty href="www.twitter.com" target="_blank">
                <IoLogoTwitter size="30px" color="#db6724"/>
              </S.linkSocialParty>
            </S.SocialPartyItems>
            <S.SocialPartyItems>
              <S.linkSocialParty href="www.instagram.com" target="_blank">
                <IoLogoInstagram size="30px" color="#db6724"/>
              </S.linkSocialParty>
            </S.SocialPartyItems>
          </S.SocialPartyList>
        </S.InfoParty>
        <S.Contact_party>
          {DataFooter.map(({ title, items }) => (
            <CardPartyItems
              key={title}
              title={title}
              items={items}
              direction="column"
            />
          ))}
        </S.Contact_party>
        <S.FooterParty>@Todos os direitos reservados</S.FooterParty>
        <S.Left_img src={LeftImg}/>
        <S.Right_img src={RightImg}/>
      </S.PartySection>
    </S.containerGlobalFooter>
  );
};
