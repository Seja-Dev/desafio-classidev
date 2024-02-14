import styled from "styled-components"

const StyledDelete = styled.div`
    background-color: #D9D9D9;
    border-radius: 10px;
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 250px;
`

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
`

const Buttons = styled.button`
    border: none;
    border-radius: 8px;
    padding: 6px 10px;
    background-color: ${props => props.delete ? "red" : "white"};
    cursor: pointer;
`

export default function ConfirmDelete({ onClick, cancelOnclick }) {
    return(
        <StyledDelete>
            <p>Tem certeza que deseja excluir?</p>
            <ButtonsContainer>
                <Buttons onClick={cancelOnclick}>cancelar</Buttons>
                <Buttons delete onClick={onClick}>excluir</Buttons>
            </ButtonsContainer>
        </StyledDelete>
    )
}