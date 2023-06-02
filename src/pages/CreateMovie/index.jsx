import { FiArrowLeft } from "react-icons/fi"

import { Container, Form } from "./styles"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Input } from "../../components/Input"
import { MovieItem } from "../../components/MovieItem"
import { Button } from "../../components/Button"
import { Textarea } from "../../components/Textarea"

export function CreateMovie(){
  return (
    <Container>
     <Header title="RocketMovies"/>

    <main>
     <Form>
        <header>
          <ButtonText title="Voltar">
            <FiArrowLeft />
          </ButtonText>

          <h2>Novo filme</h2>
        </header>
         <div className="inputs">
          <Input placeholder="Título"/>
          <Input placeholder="Sua nota(de 0 a 5)"/>
         </div>

        <Textarea placeholder="Observações"/>

        <Section title="Marcadores">
          <div className="tags">
            <MovieItem value="React"/>
            <MovieItem isNew placeholder= "Novo marcador"/>
          </div>
        </Section>

         <div className="buttons">
          <Button title="Excluir filme" />
          <Button title="Salvar alterações"/>
         </div>
  
    </Form>
  
</main>




    </Container>
  )
}