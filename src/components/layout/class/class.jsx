import styled from "styled-components"
import Image from "next/image"

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
                <Image width="20px" height="20px" alt="categoria branca" src={"/" + category + "White.png"}/> :
                <Image width="20px" height="20px" alt="categoria" src={"/" + category + ".png"}/> 
            }
            <Text white={white}>{category}</Text>
        </ClassContainer>
    )
}