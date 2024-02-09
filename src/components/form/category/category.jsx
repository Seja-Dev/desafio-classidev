import styled from "styled-components"
import { useState } from "react"

import Menu from "./menu"

const StyledCategory = styled.div`
    width: 450px;
    height: 33px;
    background-color: #a4a4a4;
    border: none;
    border-radius: 10px;
    padding: 8px 20px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
`

const Text = styled.p`
    font-size: 15px;
    font-weight: bolder;
`

const TextAndImage = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
`

export default function Category() {
    const [isMenu, setIsMenu] = useState(false)

    const handleMenu = () => {
        setIsMenu(!isMenu)
    }

    return(
        <StyledCategory onClick={handleMenu}>
            <TextAndImage>
                <Text>Selecione a categoria</Text>
                <img src="triangulo.png" width="20px" height="20px"/>
            </TextAndImage>
            {isMenu && <Menu/>}
        </StyledCategory>
    )
}