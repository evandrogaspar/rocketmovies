import { FiPlus, FiStar } from "react-icons/fi"

import { Link } from "react-router-dom"

import { Container, Content } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import {Section } from "../../components/Section"
import { Tag } from "../../components/Tag"



export function Home(){
  return(
      <Container>
        <Header title="RocketMovies"/>

        <Content>
          <div className="titleAndButton">
            <h1>Meus filmes</h1>
           
            <Button title="Adicionar filme" to="/createmovie">
              <FiPlus />
            </Button>
         
          </div>

            <Section title="Interestellar">
              <div className="stars">
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
              </div>
              <p>
                Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...
              </p>

              <Tag title="Ficção científica"/>
              <Tag title="Drama"/>
              <Tag title="Família"/>
            </Section>
            
        </Content>
      
      </Container>
  )
}