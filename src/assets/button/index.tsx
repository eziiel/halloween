import * as S from "./styled";
interface DataButton {
  text: string | JSX.Element;
  backColor: string;
  color: string;
  padding: string;
  size: string;
}

export const Button = ({
  text,
  backColor,
  color,
  padding,
  size,
}: DataButton) => {
  return (
    <S.ButtonDefault
      backColor={backColor}
      color={color}
      padding={padding}
      size={size}
    >
      {text}
    </S.ButtonDefault>
  );
};
