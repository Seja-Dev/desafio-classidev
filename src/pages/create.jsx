import styled from "styled-components"

import Navbar from "@/components/navbar/navbar"
import Input from "@/components/form/input/input"
import Category from "@/components/form/category/category"
import Textarea from "@/components/form/textarea/textearea"
import FormButton from "@/components/buttons/formButton"

const StyledDiv = styled.div`
    background: #0e0e0e;
    height: 100vh;
`

const StyledCreate = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    color: white;
    font-size: 20px;
    letter-spacing: 2px;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 15px;
`

export default function Create() {
    return(
        <StyledDiv>
            <Navbar/>
            <StyledCreate>
                <h1>Crie seu anúncio</h1>
            </StyledCreate>
            <StyledForm>
                <Input placeholder="Nome do produto"/>
                <Input placeholder="Preço"/>
                <Input placeholder="Whatsapp"/>
                <Category/>
                <Textarea/>
                <FormButton>Criar anúncio</FormButton>
            </StyledForm>
        </StyledDiv>
    )
}