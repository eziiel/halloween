import React from "react";
import { About } from "../components/about";
import { Party } from "../components/party";
import Header from "../components/header/index";
import { HomeMain } from "../components/home";
import { Items } from "../components/items";
import Global from "../styled/global";
import { Footer } from "../components/footer";

const MainPage: React.FC = () => {
  return (
    <>
      <Global />
      <HomeMain />
      <Header />
      <About />
      <Items />
      <Party />
      <Footer />
    </>
  );
};

export default MainPage;
