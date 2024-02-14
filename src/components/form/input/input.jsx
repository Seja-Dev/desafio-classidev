import styled from "styled-components"
import React from "react"

const StyledInput = styled.input`
    width: 450px;
    height: 33px;
    background-color: #a4a4a4;
    border: none;
    border-radius: 10px;
    padding: 8px 20px;
    font-size: 15px;

    &::placeholder {
        color: black;
        font-weight: bolder;
    }
`

const Input = React.forwardRef(function Input({ placeholder, ...rest }, ref) {
    return <StyledInput ref={ref} placeholder={placeholder} {...rest} />
})

Input.displayName = 'Input'

export default Input