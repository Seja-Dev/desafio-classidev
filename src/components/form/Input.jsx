import styled from "styled-components";

import { useController } from 'react-hook-form'
import Selecter from "./Selecter";

const ContainerBox = styled.div`
  width: auto;
  height: auto;
`
const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${(props)  => props.theme.colors.textColor};
  padding: 12px 20px;
  width: 504px;
  height: 46px;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.inputBackground};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const StyledInputContainerAlt = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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

const SelectContainer = styled.div`
  margin-left: 63px;
  cursor: pointer;
`
const Text = styled.h3`
  font-size: 15px;
  color: ${(props)  => props.theme.textColor};
  font-style: oblique;
  font-weight: 400;
`
const ArrowDrop = styled.img`
  width: 19px;
  height: 19px;
  right: 30%;
  z-index: 100;
  transform: translate(-52%);
  //background-color: white;
  position: absolute;
`
 function Input( {type1, type2,placeholder, name , control, defaultValue='', ...props} ) {
  const {
    field :{ value, onChange},
    fieldState : { error }

 } = useController({ name, control, defaultValue })
  return (
    <ContainerBox>
      {type1 &&
        <StyledInputContainerAlt {...props}>
            <Lupa src='/lupa.png' />
            <StyledInput
            placeholder="Digite o que procura"
            error={error} {...props} value={value} onChange={onChange}
            />
        </StyledInputContainerAlt>
      }
       {type2 &&
        <StyledInputContainer {...props}>
          <StyledInputAlt
            placeholder={placeholder}
            error={error}  value={value} onChange={onChange}
            />
        </StyledInputContainer>
      }
    </ContainerBox>



  )
}
export default Input