import { useState } from "react"
import styled from "styled-components"

import Menu from "../form/category/menu"

const ContainerSearch = styled.div`
  background-color: #a4a4a4;
  width: 704px;
  height: 56px;
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

const Search = ({ setSearchTerm, setSelectedCategory }) => {
  const [searchValue, setSearchValue] = useState("")
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  const handleInputChange = (event) => {
    const value = event.target.value
    setSearchValue(value)
    setSearchTerm(value)
  }

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible)
  }

  const handleCategorySelect = (category) => {
    setSelectedCategory(category === "Todos" ? "" : category)
    setIsMenuVisible(false)
  }

  return (
    <ContainerSearch>
      <Input
        placeholder="Digite o que procura"
        value={searchValue}
        onChange={handleInputChange}
      />
      <Line />
      <h4>Todas as categorias</h4>
      <Img width="20px" src="triangulo.png" onClick={toggleMenu} />
      {isMenuVisible && (
        <Menu search handleCategorySelect={handleCategorySelect} />
      )}
    </ContainerSearch>
  )
}

export default Search