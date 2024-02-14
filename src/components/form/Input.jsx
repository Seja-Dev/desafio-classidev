import styled from "styled-components";

import { useController } from 'react-hook-form'

const ContainerBox = styled.div`
  width: auto;
  height: auto;
`
const StyledInputContainer = styled.div`
  display: flex;
  gap: 10px;
  color: ${(props)  => props.theme.colors.textColor};
  padding: 12px 20px;
  width: 504px;
  height: 46px;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.inputBackground};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const StyledInput = styled.input`
  border: 0;
  outline: none;
  font-weight: bold;
  background: transparent;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  ::placeholder {
    color: ${(props)  => props.theme.colors.textColor};
  }
`
const StyledInputAlt = styled(StyledInput)`
  ::placeholder {
    font-size: 18px;
    font-weight: 400;
  }
`
const Lupa = styled.img`
  width: 18px;
  height: 18px;
`
const Line = styled.div`
  height: 100%;
  width: 1px;
  background-color: ${(props)  => props.theme.textColor} ;
  margin-left: 75px;
`
const TextContainer = styled.div`
  display: flex;
  gap: 11px;
  align-items: center;
  cursor: pointer;
`
const Text = styled.h3`
  font-size: 15px;
  color: ${(props)  => props.theme.textColor};
  font-style: oblique;
  font-weight: 400;
`
const ArrowDrop = styled.img`
  width: 18px;
  height: 18px;
`

 function Input( {type1, type2,placeholder, name , control, defaultValue='', ...props} ) {
  const {
    field :{ value, onChange},
    fieldState : { error }
    
 } = useController({ name, control, defaultValue })    
  return (
    <ContainerBox>
      {type1 && 
        <StyledInputContainer {...props}>
          <Lupa src='/lupa.png' />
          <StyledInput 
          placeholder="Digite o que procura"
          error={error} {...props} value={value} onChange={onChange}
           />
          <Line />
          <TextContainer>
              <Text>Todas as categorias</Text>
              <ArrowDrop src='/arrow-drop-down.png' />
          </TextContainer>
        </StyledInputContainer>
      }
       {type2 && 
        <StyledInputContainer {...props}>
          <StyledInputAlt 
          placeholder={placeholder}
          error={error} {...props} value={value} onChange={onChange}
            />
        </StyledInputContainer>
      }
    </ContainerBox>
   
   
    
  )
}
export default Input