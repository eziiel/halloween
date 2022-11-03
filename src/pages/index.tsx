import React from "react"
import Header from "../components/header/index"
import HomeMain from "../components/home"
import Global from "../styled/global"

const MainPage: React.FC = () => {
  return (
    <>
      <Global />
      <HomeMain />
      <Header />
    </>
  )
}

export default MainPage
