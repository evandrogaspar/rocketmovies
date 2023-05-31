
import { Container, Brand, Profile } from "./styles"
import { Input } from "../Input"


export function Header({title}){
  return (
    <Container>
      <Brand>
      <h1>{title}</h1>
      </Brand>

      <Input placeholder="Pesquise pelo título" />

      <Profile>
      <div>
          <strong>Evandro Gaspar</strong>
          <span><a href="#">Sair</a></span>
       </div>

        <img src="https://github.com/evandrogaspar.png" alt="Imagem do usuário" />
      </Profile>

     

    </Container>
  )
}