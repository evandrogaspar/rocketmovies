import { FiArrowLeft } from "react-icons/fi"

import { useState, useEffect } from "react"
import { Link, useParams, useNavigate} from "react-router-dom"

import { api } from "../../services/api"

import { Container, Content } from "./styles"

import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"

 export function MoviePreview(){
  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`/movienotes/${params.id}`)
      setData(response.data)
    }

    fetchNotes()
  }, [])

  return(
    <Container>
   { 
   data &&
    <Content>
      <Link to="/">
        <FiArrowLeft />
        Voltar
      </Link>
      
    
     <div className="title">
       <h2>{data.title}</h2>
       <p>{data.rating}</p>
     </div>

  
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