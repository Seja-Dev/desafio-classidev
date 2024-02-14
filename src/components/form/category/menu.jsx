import styled from "styled-components"

const StyledMenu = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #a4a4a4;
    width: 250px;
    border-radius: 10px;
    padding: 10px 10px;
    gap: 20px;
    z-index: 200;
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
    )
}