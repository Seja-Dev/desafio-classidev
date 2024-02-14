import styled from "styled-components"
import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/router"

import Textarea from "../textarea/textearea"
import Input from "../input/input"

const StyledForm = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
  gap: 10px;
`

const Button = styled.button`
    border: none;
    border-radius: 8px;
    padding: 6px 10px;
    background-color: ${props => props.edit ? "blue" : "white"};
    cursor: pointer;
`

const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-top: 30px;
`

const Label = styled.label`
  color: white;
`

export default function EditForm({ productId, initialWhatsapp, initialPrice, initialDescription, onClick }) {
    const [editedPrice, setEditedPrice] = useState(initialPrice)
    const [editedWhatsapp, setEditedWhatsapp] = useState(initialWhatsapp)
    const [editedDescription, setEditedDescription] = useState(initialDescription)
    const router = useRouter()

    const handleEdit = async (e) => {
      e.preventDefault()
        try {
          await axios.put(`https://api-products-nine.vercel.app/products/${productId}`, {
          price: editedPrice,
          description: editedDescription,
          whatsapp: editedWhatsapp
          })
          router.push('/')
        } catch (error) {
          console.error("Erro ao editar produto:", error)
        }
      }

    return(
        <StyledForm>
            <Label>Preço:</Label>
            <Input
                placeholder="preço"
                type="text"
                id="editedPrice"
                value={editedPrice}
                onChange={(e) => setEditedPrice(e.target.value)}
            />
            <Label>Whatsapp:</Label>
            <Input
                placeholder="whatsapp"
                id="editedWhatsapp"
                value={editedWhatsapp}
                onChange={(e) => setEditedWhatsapp(e.target.value)}
            />
            <Label>Descrição:</Label>
            <Textarea
                placeholder="descrição"
                id="editedDescription"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
            />
            <ButtonContainer>
                <Button onClick={onClick}>cancelar</Button>
                <Button edit onClick={handleEdit}>salvar</Button>
            </ButtonContainer>
        </StyledForm>
    )
}