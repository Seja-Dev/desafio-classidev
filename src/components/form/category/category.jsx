import styled from "styled-components"
import { useState } from "react"
import Image from "next/image"

import Menu from "./menu"

const StyledCategory = styled.div`
    width: 450px;
    height: 33px;
    background-color: #a4a4a4;
    border: none;
    border-radius: 10px;
    padding: 8px 20px;
    display: flex;
    cursor: pointer;

    @media (max-width: 550px) {
        width: 300px;
        height: 25px;
    }
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

export default function Category({ onSelect, value }) {
    const [isMenu, setIsMenu] = useState(false)
    const [isValue, setIsValue] = useState(0)

    const handleMenu = () => {
        setIsMenu(!isMenu)
        setIsValue(isValue + 1)
    }

    const handleCategorySelect = (category) => {
        onSelect(category)
        setIsMenu(false)
    }

    return(
        <StyledCategory onClick={handleMenu}>
            <TextAndImage>
                <Text value={value}>{isValue > 0 ? value : "slecione a categoria"}</Text>
                <Image width="20px" height="20px" src="/triangulo.png" alt="Ícone de categoria" />
            </TextAndImage>
            {isMenu && <Menu handleCategorySelect={handleCategorySelect}/>}
        </StyledCategory>
    )
}