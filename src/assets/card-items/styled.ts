import styled from "styled-components";

const Card_item = styled.li`
  background: var(--container_color);
  font-family: var(--lexend);
  letter-spacing: 1px;
  width: 200px;
  border-radius: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  :hover {
    button{
      box-shadow: 0 0 100px 3px var(--first_color);
    }
    img {
      bottom: 75%;
    }
  }
  @media (max-width: 1200px) {
    width: 200px;
  }
`
;

const ContentOverButtonStatus = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  overflow: hidden;
  padding: 1rem;
  border-radius: 15%;
`
const Img_card_item = styled.img`
  width: 130px;
  position: absolute;
  bottom: 65%;
  transition: 0.5s ease-in-out;
  @media (max-width: 1200px) {
    width: 100px;
  }
  @media (max-width: 800px) {
    width: 80px;
  }
`;

const Title_card_item = styled.h3`
  margin-top: 60%;
  text-transform: capitalize;
  @media (max-width: 1200px) {
    font-size: 1rem;
  }
`;

const Price_card_item = styled.span`
  color: var(--first_color);
  font-weight: 600;
  letter-spacing: 2px;
  @media (max-width: 1200px) {
    font-size: 0.875rem;
  }
`;

const Fan_card_item_button = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 35px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  background: var(--first_color);
  background-position: center;
  background-size: 60px;
`;

export {
  ContentOverButtonStatus,
  Card_item,
  Img_card_item,
  Title_card_item,
  Price_card_item,
  Fan_card_item_button,
};
