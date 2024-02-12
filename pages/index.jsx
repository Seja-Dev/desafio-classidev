import styled from "styled-components"
import axios from 'axios'
import useSWR from 'swr'

import Input from "../src/components/form/Input"
import NavBar from "../src/components/navbar/NavBar"
import Card from "../src/components/card/Card"
import Footer from "../src/components/footer/Footer"

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background};
`
const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 150px;
`
const InputAlt = styled(Input)`
  margin-top:  110px;
`
const fetcher = url => axios.get(url).then(res => res.data)
export default function Home() {
  const { data } = useSWR( `${process.env.NEXT_PUBLIC_API_URL}/api/card`, fetcher)
  return (
      <Container>
          <NavBar type1 />
          <ContainerContent>  
              {/* <InputAlt type1 /> */}
              {
                data?.map(card =>
                  <Card 
                  key={card._id}
                  title={card.title}
                  date={card.createdDate}
                  price={card.price}
                  description={card.description}
                  category={card.category}
                  />
                  )
               
                }
          </ContainerContent> 
          <Footer />
      </Container>
  )
}
