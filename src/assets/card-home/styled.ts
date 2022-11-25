import styled from "styled-components";

interface Img_title_card {
  img: string;
}

const Card = styled.div`
  width: 250px;
  height: 250px;
  background: var(--container_color);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  position: relative;
  :hover {
    img {
      bottom: 70%;
    }
  }
  @media (max-width: 1200px) {
    width: 200px;
  }
  @media (max-width: 800px) {
    width: 180px;
    :hover {
      img {
        bottom: 90%;
      }
    }
  }
`;
const Img_card = styled.img`
  width: 130px;
  position: absolute;
  bottom: 60%;
  transition: 0.5s;
  @media (max-width: 1200px) {
    width: 100px;
  }
  @media (max-width: 800px) {
    width: 80px;
    bottom: 80%;
  }
`;

const Info_card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 50%;
  font-family: var(--lexend);
  text-align: center;
  @media (max-width: 1200px) {
    margin-top: 60%;
  }
`;

const Sub_title_card = styled.h3<Img_title_card>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--first_color);
  text-transform: capitalize;
  ::after {
    display: inline-block;
    position: absolute;
    right: 10%;
    bottom: 45%;
    content: "";
    background: transparent url(${(props) => props.img});
    background-size: 40px;
    transform: rotate(20deg);
    width: 40px;
    height: 40px;
    @media (max-width: 1200px) {
      background-size: 25px;
      width: 25px;
      height: 25px;
    }
  }
  @media (max-width: 1200px) {
    font-size: 1rem;
  }
`;

const Info_text = styled.p`
  align-self: stretch;
  font-size: 0.875rem;
  padding: 0 1rem;
  color: var(--white_color);
  @media (max-width: 1200px) {
    font-size: 0.875remrem;
  }
`;

export { Card, Img_card, Info_card, Sub_title_card, Info_text };
