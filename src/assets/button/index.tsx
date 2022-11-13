import * as S from "./styled";
interface DataButton {
  text: string | JSX.Element;
  backColor: string;
  color: string;
  width: string;
  height: string;
  size: string;
}

export const Button = ({
  text,
  backColor,
  color,
  width,
  height,
  size,
}: DataButton) => {
  return (
    <S.ButtonDefault
      backColor={backColor}
      color={color}
      width={width}
      height={height}
      size={size}
    >
      {text}
    </S.ButtonDefault>
  );
};
