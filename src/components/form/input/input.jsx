import styled from "styled-components"

const StyledInput = styled.input`
    width: 450px;
    height: 33px;
    background-color: #a4a4a4;
    border: none;
    border-radius: 10px;
    padding: 8px 20px;
    font-size: 15px;

    &::placeholder{
        color: black;
        font-weight: bolder;
    }
`

export default function Input({ placeholder }) {
    return(
        <StyledInput placeholder={placeholder}/>
    )
}