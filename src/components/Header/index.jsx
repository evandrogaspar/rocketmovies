import { useNavigate } from "react-router-dom"
import { Container, Brand, Profile, Logout } from "./styles"
import { Input } from "../Input"

import { useAuth } from "../../hooks/auth"


export function Header({title}){
  const { signOut } =  useAuth()
  const navigate = useNavigate()

  function handleSignOut(){
    navigate("/")
    signOut()
  }

  return (
    <Container>
      <Brand>
      <h1>{title}</h1>
      </Brand>

      <Input placeholder="Pesquise pelo título" />

  <div className="profile-wrapper">
    
        <Profile to="/profile">
            <strong>Evandro Gaspar</strong>
      
          <img src="https://github.com/evandrogaspar.png" alt="Imagem do usuário" />
        </Profile>
        <Logout onClick={handleSignOut}>
          Sair
        </Logout>
    
  </div>



     

    </Container>
  )
}