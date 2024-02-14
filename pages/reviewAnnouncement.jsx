import styled from "styled-components";
import axios from 'axios';
import useSWR from 'swr';

import NavBar from "../src/components/navbar/NavBar";
import Footer from "../src/components/footer/Footer";
import Review from '../src/components/review/Review';
import Card from "../src/components/card/Card";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.background};
`;

export default function reviewAnnouncementPage (){
  const fetcher = async (url) => {
    const response = await axios.get(url);
    return response.data;
  };

  const { data } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/card`, fetcher);

  return(
    <Container>
      <NavBar type2 />
      {data?.map((card) =>  (
         <Review
          id={card._id}
          key={card._id}
          title={card.title}
          date={card.createdDate}
          price={card.price}
          description={card.description}
          category={card.category} 
         />
      ))}  
      <Footer />
    </Container>
  );
}