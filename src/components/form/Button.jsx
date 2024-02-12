import styled from "styled-components"
 
const StyledButton = styled.button`
  background-color : ${props => props.theme.primary};
  border: 0;
  font-weight :bold;
  color:${props => props.theme.white};
  font-size: 16px;
  transition: 0.4s;
  background: rgba(242, 128, 0, 1);
  width: 221px;
  height: 48px;
  top: 30px;
  left: 916px;
  border-radius: 10px;
  cursor: pointer;
  color: #fff;
  :hover {
    background-color: #ffa600c0;
  }
`
const Button = ({ children,loading, ...props }) => {
    return ( 
      <StyledButton {...props}>
        {loading && <img src='./loader.png' width='15px' />}
        {!loading && children}
        </StyledButton>
  )
}
export default Button