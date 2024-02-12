import styled from "styled-components";
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi';
import axios from 'axios'
import { useSWRConfig } from "swr";

import { createCardSchema } from "../../../modules/card.model"; 

import Input from "../form/Input";
import Button from "../form/Button";

const Container  = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 70px;
  background: ${(props) => props.theme.colors.background};
`;
const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 58px;
  color: ${(props) => props.theme.colors.white};
`
const FormContainer = styled.div`
  margin-top: 50px;
`
const Form = styled.form`
 display: flex;
 flex-direction: column;
 margin: 20px 0;
 gap: 20px;
`
const InputAlt = styled(Input)`
  height: 126px;
  align-items: flex-start;
`
const ButtonAlt = styled(Button)`
  width: 504px;
`
export default function CreateCard(){
  const { mutate } = useSWRConfig()
  const {control,handleSubmit, formState: { isValid}, reset } = useForm({
    resolver: joiResolver(createCardSchema),
    mode: 'all'
  })

  const [loading, setLoading] = useState(false)
  const onSubmit =  async (data) => {
    setLoading(true)
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/card`, data)
    if (response.status === 201) {
      reset()
      mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/card`)
      setLoading(false)
    } 
  } 
  return(
    <Container>
          <Title>Crie seu anúncio </Title>
          <FormContainer>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Input 
              placeholder='Nome do produto'
              name="title"
              control={control} 
               type2 />
              <Input 
              placeholder='Selecione a categoria'
              name='category'
              control={control}
               type2 />
              <Input 
              placeholder='Preço'
              name='price'
              control={control}
               type2 />
              <Input 
              placeholder='Whatsapp'
              name='price'
              control={control} 
               type2 />
              <InputAlt placeholder='Descrição'
               name='description'
               control={control} 
               type2 />
              <ButtonAlt loading={loading} disabled={!isValid} >Criar anúncio</ButtonAlt>
            </Form>
          </FormContainer>
      </Container>
  )
}