import styled from "styled-components";

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
`;
const Img_card = styled.img`
  width: 130px;
  position: absolute;
  bottom: 60%;
  transition: 0.5s;
`;

const Info_card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 50%;
  font-family: var(--lexend);
  text-align: center;
`;

const Sub_title_card = styled.h3`
  color: var(--first_color);
  text-transform: capitalize;
  ::after{
    
  }
`

const Info_text = styled.p`
  align-self: stretch;
  font-size: 0.875rem;
  padding: 0 1rem;
  color: var(--white_color);
`



export { Card, Img_card, Info_card, Sub_title_card, Info_text };
