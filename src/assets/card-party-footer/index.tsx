import * as S from "./styled";

interface ItemsList {
  title: string;
  items: string[];
}
export const CardPartyItems = ({ title, items }: ItemsList) => {
  return (
    <S.Card_party_footer>
      <S.Title_party_footer>{title}</S.Title_party_footer>
      <S.List_party_footer>
        {items.map((item) => (
          <S.Items_party_footer key={item}>{item}</S.Items_party_footer>
        ))}
      </S.List_party_footer>
    </S.Card_party_footer>
  );
};
