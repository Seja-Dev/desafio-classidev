import styled from "styled-components"

const StyledDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999;
    gap: 10px;
`

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
        <StyledDiv>
            <StyledDelete>
                <p>Tem certeza que deseja excluir?</p>
                <ButtonsContainer>
                    <Buttons onClick={cancelOnclick}>cancelar</Buttons>
                    <Buttons delete onClick={onClick}>excluir</Buttons>
                </ButtonsContainer>
            </StyledDelete>
        </StyledDiv>
    )
}