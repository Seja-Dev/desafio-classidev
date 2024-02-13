import styled from "styled-components";
import axios from 'axios';
import useSWR from 'swr';

import Input from "../src/components/form/Input";
import NavBar from "../src/components/navbar/NavBar";
import Card from "../src/components/card/Card";
import Footer from "../src/components/footer/Footer";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background};
`;

const ContainerContent = styled.div`
  display: grid;
  grid-template-columns: 350px 350px 350px;
  margin: 0 130px;
`;

const InputAlt = styled(Input)`
  margin-top:  110px;
`;

const fetcher = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export default function Home() {
  const { data } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/card`, fetcher);

  // if (error) return <div>Erro ao carregar os dados</div>;
  // if (!data) return <div>Carregando...</div>;

  return (
    <Container>
      <NavBar type1 />
      <ContainerContent>
        {/* <InputAlt type1 /> */}
        {data?.map((card,index) => (
          <Card
            key={card._id[index]}
            title={card.title}
            date={card.createdDate}
            price={card.price}
            description={card.description}
            category={card.category}
          />
        ))}
      </ContainerContent>
      <Footer />
    </Container>
  );
}
