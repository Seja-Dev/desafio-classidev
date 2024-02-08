import styled from "styled-components"

import Navbar from "@/components/navbar/navbar"
import Search from "@/components/search/search"
import Classefields from "@/components/classifieds/classifields"

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
    <>
      <Navbar />
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
    </>
  )
}

export default HomePage