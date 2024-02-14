import styled from "styled-components";
import { useController } from 'react-hook-form'

const StyledSelect = styled.select`
  padding: 10px;
  width: 504px;
  height: 47px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  cursor: pointer;
  background-color: ${props => props.theme.colors.inputBackground};
  color:  ${(props)  => props.theme.colors.textColor};
  :focus{
    outline: none;
  }
`

export default function Selecter({ name , control, defaultValue='', ...props}){
  const {
    field :{ value, onChange},
    
 } = useController({ name, control, defaultValue })  
  return(
    <StyledSelect {...props} value={value} onChange={onChange}>                
      <option value='' disabled >Selecione sua categoria</option>
      <option value="Carros">Carros</option>
      <option value="Roupas e acessórios">Roupas e acessórios</option>
      <option value="Eletrônicos">Eletrônicos</option>
    </StyledSelect>
  )
}