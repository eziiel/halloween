import * as S from "./styled";

interface ItemsList {
  title: string;
  items: string[];
  direction: string;
}
export const CardPartyItems = ({ title, items, direction }: ItemsList) => {

  return (
    <S.Card_party_footer>
      <S.Title_party_footer>{title}</S.Title_party_footer>
      <S.List_party_footer direction={direction}>
        {items.map((item) => (
          <S.Items_party_footer key={title}>{item}</S.Items_party_footer>
        ))}
      </S.List_party_footer>
    </S.Card_party_footer>
  );
};
