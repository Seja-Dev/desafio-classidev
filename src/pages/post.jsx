import styled from "styled-components"

import Navbar from "@/components/navbar/navbar"
import Back from "@/components/layout/back/back"

const StyledDiv = styled.div`
    height: 100vh;
    background: #0e0e0e;
`

export default function Post() {
    return(
        <StyledDiv>
            <Navbar/>
            <Back/>
        </StyledDiv>
    )
}