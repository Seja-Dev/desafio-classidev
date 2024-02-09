import styled from "styled-components"
import Link from "next/link"

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    width: 250px;
    cursor: pointer;
`

const Text = styled.p`
    color: white;
    text-decoration: underline;
`

export default function Back() {
    return(
        <Link href="/">
            <StyledDiv href="/">
                <img src="seta.png"/>
                <Text>voltar para a página principal</Text>
            </StyledDiv>
        </Link>
    )
}