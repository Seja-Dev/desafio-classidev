import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import axios from 'axios'

import Input from '../form/Input'
import { createCardSchema, editCardSchema } from '../../../modules/card.schema'
import Button from '../form/Button'

const InputAlt = styled(Input)`
  height: 126px;
  ::placeholder{
    align-items: flex-end;
  }
  
`;
const EditCard= ({ id, title,price, description,category, onSave }) => {
  const {control,handleSubmit, formState: { isValid } } = useForm({
    resolver: joiResolver(createCardSchema),
    mode: 'all'
  })

  const handleSaveEdit = async (data) => {
    try {

      const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/card`,{
          id,
          title: data.title,
          price: data.price,
          description: data.description,
          category: data.category
        } )

      if (response.status === 200) {
        onSave()
      }

    } catch (err) {
      console.error(err)
    }
  }
  return (
    <form onSubmit={handleSubmit(handleSaveEdit)} >
      <Input 
            placeholder='Nome do produto'
            name="title"
            control={control} 
            defaultValue={title}
            type2 
          />
          <Input 
            placeholder='Selecione a categoria'
            name='category'
            control={control}
            defaultValue={category}
            type2 
          />
          <Input 
            placeholder='Preço'
            name='price'
            control={control}
            defaultValue={price}
            type2 
          />
          <Input 
            placeholder='Whatsapp'
            name='price'
            control={control}
            defaultValue={price}
            type2 
          />
          <InputAlt 
            placeholder='Descrição'
            name='description'
            control={control}
            defaultValue={description} 
            type2 
          />
      <Button disabled={!isValid}>Salvar alterações </Button>
    </form>
  )
}
export default EditCard