import styled from "styled-components";

import NavBar from "../src/components/navbar/NavBar";
import Footer from "../src/components/footer/Footer";
import Review from '../src/components/review/Review'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.background};
`

export default function reviewAnnouncementPage (){
  return(
    <Container>
        <NavBar type2 />
        <Review />
        <Footer />
    </Container>
    
  )
}