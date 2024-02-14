import styled from "styled-components"

const StyledDate = styled.p`
    font-size: 14px;
    font-style: italic;
    font-weight: lighter;
    color: ${props => props.white ? "white" : "black"};
`

export default function Date({ children, white }) {
    return(
        <StyledDate white={white}>Postado em {children}</StyledDate>
    )
}