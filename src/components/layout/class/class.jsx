import styled from "styled-components"

const ClassContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

const Text = styled.p`
    font-size: 14px;
    font-weight: 700;
`

export default function Class({ category }) {
    return(
        <ClassContainer>
            <img src={category + ".png"}/>
            <Text>{category}</Text>
        </ClassContainer>
    )
}