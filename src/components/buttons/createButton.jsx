import styled from "styled-components"

const StyledButton = styled.button`
    background-color: #f28000;
    width: 261px;
    height: 56px;
    margin-right: 100px;
    color: white;
    border-radius: 10px;
    border: none;
    cursor: pointer;
`



export default function CreateButton({ children }) {
    return(
        <StyledButton>{children}</StyledButton>
    )
}