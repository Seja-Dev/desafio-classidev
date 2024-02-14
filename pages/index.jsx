import styled from "styled-components";
import axios from 'axios';
import { useForm } from "react-hook-form";
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

const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: 350px 350px 350px;
  margin: 0 130px;
`;
const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px ;
`

const fetcher = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export default function Home() {
  const { control, handleSubmit, formState: { isValid }, reset } = useForm({
    mode: 'all'
  });
  const { data,error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/card`, fetcher);

   if (error) return <div>Erro ao carregar os dados</div>;
   if (!data) return <div>Carregando...</div>;

  return (
    <Container>
      <NavBar type1 />
      <ContainerContent>
            <Input
              name='title'
              control={control}
              type1   
            /> 
            <ContainerCards>       
              {data?.map((card) => (
                <Card
                  key={card._id}
                  title={card.title}
                  date={card.createdDate}
                  price={card.price}
                  description={card.description}
                  category={card.category}
                  id={card._id}
                />
              ))}
            </ContainerCards>
      </ContainerContent>
      <Footer />
    </Container>
  );
}
