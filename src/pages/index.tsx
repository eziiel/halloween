import React from "react";
import { About } from "../components/about";
import Header from "../components/header/index";
import { HomeMain } from "../components/home";
import Global from "../styled/global";

const MainPage: React.FC = () => {
  return (
    <>
      <Global />
      <HomeMain />
      <Header />
      <About />
    </>
  );
};

export default MainPage;
