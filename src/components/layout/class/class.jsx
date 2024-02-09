import styled from "styled-components"

const ClassContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

const Text = styled.p`
    font-size: 14px;
    font-weight: 700;
    color: ${props => props.white ? "white" : "black"};
`

export default function Class({ category, white }) {
    return(
        <ClassContainer>
            {
                white ? 
                <img src={category + "White.png"}/> :
                <img src={category + ".png"}/> 
            }
            <Text white={white}>{category}</Text>
        </ClassContainer>
    )
}