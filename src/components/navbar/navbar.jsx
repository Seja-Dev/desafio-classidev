import styled from "styled-components"

import CreateButton from "../buttons/createButton"

const StyledNavbar = styled.div`
    height: 100px;
    width: 100%;
    background-color: #1f1f1f;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`

const Logo = styled.h1`
    color: #FFF;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const Description = styled.h3`
    color: #818181;
    font-size: 20px;
    font-style: italic;
    font-weight: 100;
    line-height: normal;
`

export default function Navbar() {
    return(
        <StyledNavbar>
            <LogoContainer>
                <Logo>ClassifiDev</Logo>
                <Description>O seu classificado online</Description>
            </LogoContainer>
            <CreateButton>Criar anúncio</CreateButton>
        </StyledNavbar>
    )
}