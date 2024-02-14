import styled from "styled-components"
import { forwardRef } from "react"

const StyledTextarea = styled.textarea`
    background-color: #a4a4a4;
    border-radius: 10px;
    padding: 8px 20px;
    width: 450px;
    height: 130px;
    resize: none;

    &::placeholder{
        font-size: 15px;
        color: black;
        font-weight: bolder;
    }
`

 const Textarea = forwardRef(({ ...rest }, ref) => {
    return(
        <StyledTextarea {...rest} ref={ref}/>
    )
})

export default Textarea