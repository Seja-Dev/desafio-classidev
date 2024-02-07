import styled from "styled-components"

const StyledButton = styled.button`
    background-color: #f28000;
    width: 200px;
    padding: 17px 50px;
    margin-right: 100px;
    color: white;
    border-radius: 8px;
    border: none;
    cursor: pointer;
`



export default function CreateButton({ children }) {
    return(
        <StyledButton>{children}</StyledButton>
    )
}