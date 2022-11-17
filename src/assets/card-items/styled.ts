import styled from "styled-components";

interface ImgFan {
  img: JSX.Element
  
}
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
    img {
      bottom: 75%;
    }
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
`;

const Title_card_item = styled.h3`
  margin-top: 60%;
  text-transform: capitalize;
`;

const Price_card_item = styled.span`
  color: var(--first_color);
  font-weight: 600;
  letter-spacing: 2px;
`;

const Fan_card_item = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 35px;
  border-radius: 20px;
  cursor: pointer;
  background: var(--first_color);
  background-position: center;
  background-size: 60px;
  :hover{
    box-shadow: 0 0 200px 3px var(--first_color);
  }
`;

export {
  ContentOverButtonStatus,
  Card_item,
  Img_card_item,
  Title_card_item,
  Price_card_item,
  Fan_card_item,
};
