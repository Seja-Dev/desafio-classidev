import styled from "styled-components"

import Navbar from "@/components/navbar/navbar"
import Search from "@/components/search/search"

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 150px 0;
`

function HomePage () {

  return (
    <>
      <Navbar />
      <SearchContainer>
        <Search/>
      </SearchContainer>
    </>
  )
}

export default HomePage