import styled from "styled-components";

const Card_item = styled.li`
  background: var(--container_color);
  font-family: var(--lexend);
  letter-spacing: 1px;
  width: 200px;
  padding: 1rem;
  border-radius: 15%;
  display: flex;
  gap: 0.7rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  :hover {
    img {
      bottom: 75%;
    }
  }
`
;

const Img_card_item = styled.img`
  width: 130px;
  position: absolute;
  bottom: 65%;
  transition: 0.5s ease-in-out;
`;

const Title_card_item = styled.h3`
  margin-top: 60%;
`;

const Price_card_item = styled.span``;

const Buttom_card_item = styled.button``;

export {
  Card_item,
  Img_card_item,
  Title_card_item,
  Price_card_item,
  Buttom_card_item,
};
