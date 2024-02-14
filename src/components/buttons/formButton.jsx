import styled from "styled-components"

const StyledButton = styled.button`
    width: 490px;
    background-color: #f28000;
    cursor: pointer;
    height: 50px;
    color: white;
    border-radius: 10px;
    border: none;

    @media (max-width: 550px) {
        width: 340px;
        height: 40px;
    }
`

export default function FormButton({ children }) {
    return(
        <StyledButton>{children}</StyledButton>
    )
}