import styled from "styled-components"

import Navbar from "@/components/navbar/navbar"

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

export default function Create() {
    return(
        <StyledDiv>
            <Navbar/>
            <StyledCreate>
                <h1>Crie seu anúncio</h1>
            </StyledCreate>
        </StyledDiv>
    )
}