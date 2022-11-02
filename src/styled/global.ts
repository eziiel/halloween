import { createGlobalStyle } from "styled-components"

function pixelsToRem(...values: number[]): string {
  return values.reduce((a, i) => (a += `${i / 16}rem `), "").trim()
}

const Global = createGlobalStyle`


:root{
  //colors
    --first_color: hsl(22, 72%, 50%);
    --first_color_alt: hsl(22, 72%, 46%);
    --white_color:#fff;
    --text_color:hsl(22, 4%, 75%);
    --text_color_light: hsl(22, 4%, 55%);
    --body_color: hsl(22, 8%, 6%);
    --container_color: hsl(22, 8%, 7%);
    //fonts-size
    --first_size: 1rem;
    --medium_size:1.5rem;
    --second_size: 2rem;
    //family
    --crepster: 'Creepster', cursive;
    --lexend: 'Lexend', sans-serif;
    //short_font
    --font_herder: normal 600 ${pixelsToRem(16)}/${pixelsToRem(16)};
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  
  body{
    background: var(--body_color);
    color: var(--white_color);
    font-family: var(--crepster);
    color: var(--white_color);
    height: 1500px;
  }
  a{
    text-decoration: none;
    display: block;
    color: var(--white_color);
  }
  ul,li{
    list-style: none;
  }
  img{
    max-width: 100%;
    height: auto;
  }
  `

export default Global
