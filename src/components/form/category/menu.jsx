import styled from "styled-components"

const MenuContainer = styled.div`
    z-index: 200;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledMenu = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #a4a4a4;
    width: 250px;
    border-radius: 10px;
    padding: 10px 10px;
    gap: 20px;
`

const Options = styled.div`
    cursor: pointer;
    
    &:hover {
        background-color: #757575;
    }
`

export default function Menu({ handleCategorySelect, search }) {
    const categoriesSearch = ["Todos", "carros", "eletrônicos", "roupas"]
    const categoriesInput = ["carros", "eletrônicos", "roupas"]

    const handleClick = (category) => {
        handleCategorySelect(category);
    }

    return(
        <MenuContainer>
            <StyledMenu>
                { search ? 
                    categoriesSearch.map((category, index) => (
                        <Options key={index} onClick={() => handleClick(category)}>
                        {category}
                        </Options>
                    )) : 
                    categoriesInput.map((category, index) => (
                        <Options key={index} onClick={() => handleClick(category)}>
                        {category}
                        </Options>
                    ))
                }
            </StyledMenu>
        </MenuContainer>
    )
}