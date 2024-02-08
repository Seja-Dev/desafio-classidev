import styled from "styled-components"

const StyledFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: #1f1f1f;
    margin-top: 150px;
`

const Text = styled.h3`
    color: white;
    font-weight: lighter;
    font-size: 20px;
`

export default function Footer() {
    return(
        <StyledFooter>
            <Text>Criado por Iago Pinheiro - Desafio SejaDev</Text>
        </StyledFooter>
    )
}