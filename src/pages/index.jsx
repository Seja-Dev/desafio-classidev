import styled from "styled-components"

import Navbar from "@/components/navbar/navbar"
import Search from "@/components/search/search"
import Classefields from "@/components/classifieds/classifields"
import Footer from "@/components/footer/footer"

const StyledDiv = styled.div`
  background: linear-gradient(to bottom, #424242 0%, #000000 100%);
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 150px 0;
`

const ClassefieldsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-content: center;
  margin-left: 40px;
`

function HomePage () {

  return (
    <StyledDiv>
      <Navbar button/>
      <SearchContainer>
        <Search/>
      </SearchContainer>
      <ClassefieldsContainer>
        <Classefields/>
        <Classefields/>
        <Classefields/>
        <Classefields/>
        <Classefields/>
        <Classefields/>
      </ClassefieldsContainer>
      <Footer/>
    </StyledDiv>
  )
}

export default HomePage