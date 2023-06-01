import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"

import { Container, Form, Avatar } from "./styles"

import { Button } from "../../components/Button"
import { Input  } from "../../components/Input"
import { ButtonText } from "../../components/ButtonText"

export function Profile(){
  return (
    <Container>
        <header>
          <ButtonText>
            <FiArrowLeft />
          </ButtonText>
        </header>

        <Form>
          <Avatar>
            <img src="https://github.com/evandrogaspar.png" alt="foto do usuário" />

            <label htmlFor="avatar">
              <FiCamera />
              <input type="file" 
               id="avatar" />
            </label>
          </Avatar>

          <div className="inputs">
            <Input
            placeholder="Nome"
            type="text"
            icon={FiUser}
            />
            
             <Input
            placeholder="Email"
            type="text"
            icon={FiMail}
            />
            <Input
            placeholder="Senha actual"
            type="password"
            icon={FiLock}
            />
            <Input
            placeholder="Nova senha"
            type="password"
            icon={FiLock}
            />
          </div>

      
         <Button title="Salvar"/>
         
        </Form>
    </Container>
  )
}