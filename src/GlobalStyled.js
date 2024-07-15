import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const colors = {
  point: "crimson",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{box-sizing:border-box;}

    body{
        font-family: "Noto Sans KR", sans-serif;
        background-color: #1d1d1d;
        color: white;
        letter-spacing: -1px;
    }
    a{
        text-decoration: none;
        color: white;
    }
`;
