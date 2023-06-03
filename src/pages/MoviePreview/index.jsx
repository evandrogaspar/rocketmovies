import { FiStar, FiClock, FiArrowLeft } from "react-icons/fi"

import { Link } from "react-router-dom"

import { Container, Content } from "./styles"

import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"

 export function MoviePreview(){
  return(
    <Container>
      <Header />

    <Content>
      <Link to="/">
        <FiArrowLeft />
        Voltar
      </Link>
      
    <Section>
     <div className="title">
       <h2>Interestellar</h2>
        <div className="stars">
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
        </div>
     </div>

    <div className="user-details">
  
        <div className="profile">
    
        <img src="https://github.com/evandrogaspar.png" alt="foto do usuário" />
            
          <span>Por Evandro Gaspar</span>
        </div>
  
        <div className="date">
          <FiClock />
        <span>23/05/22 às 8h:00</span>
        </div>
    </div>

      <Tag title="Ficção científica"/>
      <Tag title="Drama"/>
      <Tag title="Família"/>

      <p>
      Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.
       </p>
    </Section>
    </Content>


    </Container>
  )
}