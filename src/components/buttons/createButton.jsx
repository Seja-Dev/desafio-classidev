import styled from "styled-components"
import Link from "next/link"

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

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`

export default function CreateButton({ children }) {
    return(
        <StyledLink href="/create">
            <StyledButton>{children}</StyledButton>
        </StyledLink>
    )
}