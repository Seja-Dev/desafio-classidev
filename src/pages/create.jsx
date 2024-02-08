import styled from "styled-components"

import Navbar from "@/components/navbar/navbar"

const StyledDiv = styled.div`
    background: linear-gradient(to bottom, #424242 0%, #000000 100%);
    height: 100vh;
`

export default function Create() {
    return(
        <StyledDiv>
            <Navbar/>
        </StyledDiv>
    )
}