import styled from "styled-components"

import Navbar from "@/components/navbar/navbar"
import Search from "@/components/search/search"
import Classefields from "@/components/classifieds/classifields"
import Footer from "@/components/footer/footer"

const StyledDiv = styled.div`
  background: linear-gradient(to bottom, #424242 0%, #000000 100%);
  display: flex;  
  flex-direction: column;
  min-height: 100vh;
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
  margin-bottom: 150px;
`

function HomePage () {

  return (
    <StyledDiv>
      <Navbar button/>
      <SearchContainer>
        <Search/>
      </SearchContainer>
      <ClassefieldsContainer>
        <Classefields
          category="carros"
          product="Palio 2020"
          price="20.000,00"
          date="22/02/2022"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..."
        />
        <Classefields
          category="carros"
          product="Palio 2020"
          price="20.000,00"
          date="22/02/2022"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..."
        />
        <Classefields
          category="carros"
          product="Palio 2020"
          price="20.000,00"
          date="22/02/2022"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..."
        />
        <Classefields
          category="carros"
          product="Palio 2020"
          price="20.000,00"
          date="22/02/2022"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..."
        />
        <Classefields
          category="eletrônicos"
          product="Palio 2020"
          price="20.000,00"
          date="22/02/2022"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..."
        />
        <Classefields
          category="carros"
          product="Palio 2020"
          price="20.000,00"
          date="22/02/2022"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..."
        />
      </ClassefieldsContainer>
      <Footer/>
    </StyledDiv>
  )
}

export default HomePage