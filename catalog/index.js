import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages = [
  {
    path: "/",
    title: "Bem Vindo!",

    content: pageLoader(() => import("./WELCOME.md"))
  },
  {    
    title: "CÁLCULO DIFERENCIAL",
    
    pages: [
      {      
        path: "semester-1/calc-1.md",
        title: 'Introdução',
        content: pageLoader(() => import('./semester-1/calc-1.md'))
      },
      {      
        path: "semester-1/est-1.md",
        title: 'Propriedade dos reais',
        content: pageLoader(() => import('./semester-1/prop-reais-1.md'))    
      },
    ]
  }
];

ReactDOM.render(
  <Catalog title="IME-UFG" pages={pages} />,
  document.getElementById("catalog")
);
