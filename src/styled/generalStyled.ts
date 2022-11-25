import styled from "styled-components";

const Container_main = styled.div`
  max-width: 1024px;
  margin-inline: 1.5rem;
  margin: 0 auto;
  padding: 8rem 0;
  @media(max-width:1200px) {
    padding: 5rem 0;
  }
`;
const Title_size2 = styled.h2`
  font-family: var(--crepster);
  font-size: 3rem;
  letter-spacing: 2px;
  font-weight: 500;
  color: var(--first_color_alt);
  max-width: 25ch;
  text-align: center;
  @media(max-width:1200px) {
    font-size: 2rem;
  }
`;
const Info_div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;
const Text_info_p = styled.p`
  font-family: var(--lexend);
  max-width: 40ch;
  text-align: center;
  letter-spacing: 1px;
  @media (max-width: 1200px) {
    font-size: 0.875rem;
  }
  @media (max-width: 800px) {
    font-size: 0.750rem;
    letter-spacing: 1.125px;
    line-height: 1.125;
  }
`;

export {
  Container_main,
  Title_size2,
  Info_div,
  Text_info_p
};
