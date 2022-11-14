import React from "react";
import { About } from "../components/about";
import Header from "../components/header/index";
import { HomeMain } from "../components/home";
import { Items } from "../components/items/showItems";
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
