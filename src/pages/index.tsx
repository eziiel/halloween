import React from "react";
import { CardItems } from "../assets/card-items";
import { About } from "../components/about";
import Header from "../components/header/index";
import { HomeMain } from "../components/home";
import { Items } from "../components/items";
import Global from "../styled/global";

const MainPage: React.FC = () => {
  return (
    <>
      <Global />
      <HomeMain />
      <Header />
      <About />
      <Items />
    </>
  );
};

export default MainPage;
