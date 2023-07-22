import { FiArrowLeft } from "react-icons/fi"

import { useState, useEffect } from "react"
import { useParams, useNavigate} from "react-router-dom"

import { api } from "../../services/api"

import { Container, Content } from "./styles"

import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"


 export function MoviePreview(){
  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja mesmo remover a nota do filme ?")

    if(confirm){
      await api.delete(`/movienotes/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/movienotes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [])

  return(
    <Container>
   { 
   data &&
    <Content>
      <div className="buttons">
        <ButtonText onClick={handleBack}>
        <FiArrowLeft />
          Voltar
        </ButtonText>
    
        <ButtonText title="Excluir" onClick={handleRemove}/>
      
      </div>
      
    
       <h1>{data.title}</h1>
       <span>Avaliação: {data.rating}</span>
    
  
      <p>
        {data.description}
     </p>

    {
      data.tags &&
    <Section title="Marcadores">
       { 
       data.tags.map(tag => (
        <Tag 
        key={String(tag.id)}
        title={tag.name}
        />

        ))
       }
    </Section>
    }

    </Content>
}

    </Container>
  )
}