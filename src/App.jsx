import React from "react";

import './styles/App.css'
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import article1 from "./acts/imagens/logo.png"
import article2 from "./acts/imagens/lua.png"
import article3 from "./acts/imagens/astronauta.png"
import { Counter } from "./components/Counter/Counter";

// Componente em classe é uma classe que herda a classe Component do React, e retorna HTML dentro do método render.
class App extends React.Component {
  // Método responsável por renderizar o conteúdo do nosso componente
  render() {
    return (
      <>
        <Navbar />

        <Counter />

        {/* <section id="articles">
          <Article title="Desegning Dashboards" 
          provider="NASA" 
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos optio quibusdam iusto eligendi explicabo soluta, tempora odio iste enim asperiores accusantium consequatur, minus officiis harum modi, excepturi deserunt? Reprehenderit, harum. "
          thumbnail={article1}
          />

          <Article title="Humans in Space" 
          provider="Space" description="Accusantium consequatur, minus officiis harum modi, excepturi deserunt? Reprehenderit, harum."
          thumbnail={article3}/>

          <Article title="Moon to Mars" 
          provider="Moon" description=" Eos optio quibusdam iusto eligendi explicabo soluta, tempora odio iste enim asperiores accusantium consequatur, minus officiis harum modi, excepturi deserunt? Reprehenderit, harum."
          thumbnail={article2}/>

          <Article title="Solar System and Beyond" provider="Planets" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos optio quibusdam iusto eligendi explicabo soluta, tempora odio iste enim asperiores accusantium consequatur, minus officiis harum modi, excepturi deserunt? Reprehenderit, harum."
          thumbnail={article1}
          />
        </section> */}
        
      </>
    )
  }
}

export default App;
