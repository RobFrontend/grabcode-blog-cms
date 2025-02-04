import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  /* Colors */
  --color-body-background: #f9f6ee;
  --color-background: #dddedf;
  --color-font: #141522;
  --color-hover: #939398;

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
}

*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  transition: background-color 0.5s, box-shadow 0.5s, color 0.5s, border-radius .5s, opacity 0.5s;


}
html {
  font-size: 62.5%;
}
@media  (max-width: 35em) {
  html {
    font-size: 50%;
  }
}

body {
  font-family: "Ubuntu", sans-serif;
  color: var(--color-font);
  background-color: var(--color-body-background);
}

label,
input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

*:disabled {
  cursor: not-allowed;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}
textarea,
label,
input {
  font-size: 1.8rem;
  
}
label{
  text-transform: capitalize;

}

p,
h1,
h2,
h3,
h4 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}

/* FIREFOX */
* {
    scrollbar-width: thin;
    scrollbar-color: var(--color-hover) var(--color-body-background);;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 5px;
    height: 5px;

  }
  *::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}

  *::-webkit-scrollbar-track {
    background: var(--color-body-background);
    border-radius: 100px;
  }

  *::-webkit-scrollbar-thumb {
    background-color:var(--color-hover);
    border-radius: 100px;
    border: 3px none var(--color-body-background);
  }
  *::-webkit-scrollbar-corner {
  background: transparent;
}

`;

export default GlobalStyles;
