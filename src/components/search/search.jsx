import styled from "styled-components"

const ContainerSearch = styled.div`
    background-color: #a4a4a4;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding-right: 20px;
    border-radius: 10px;
`

const Input = styled.input`
  height: 100%;
  width: 350px;
  border: none;
  border-radius: 10px;
  background: #a4a4a4;
  padding-left: 50px;
  background-image: url('search.png');
  background-repeat: no-repeat;
  background-position: left 10px center;
  background-size: 20px;
  margin-left: 5px;

  &::placeholder {
    color: black;
    font-size: 20px;
  }
`

const Line = styled.div`
    width: 1px;
    height: 37px;
    background-color: black;
`

const Img = styled.img`
    width: 20px;
    cursor: pointer;
`

export default function Search() {
    return(
        <ContainerSearch>
            <Input placeholder="Digite o que procura"/>
            <Line/>
            <h4>Todas as categorias</h4>
            <Img  width="20px" src="triangulo.png"/>
        </ContainerSearch>
    )
}