import styled from "styled-components";
import moment from 'moment'
import axios from 'axios'
import { useSWRConfig } from "swr"
import { useRouter } from "next/router";

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 150px;
`
const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  margin-bottom: 45px;
`
const TextLink = styled.h3`
  text-decoration: underline;
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
  font-weight: 400;
`
const ArrowImg = styled.img`
  width: 16px;
  height: 16px;
`
const TilteContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: end;
`
const Title = styled.h3`
  font-size: 48px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
`
const EditImg = styled.img`
  width: 18px;
  height: 18px;

`
const TrashImg = styled.img`
  width: 18px;
  height: 18px;
`
const TextEdit = styled.h3`
  font-size: 14px;
  font-style: italic;
  font-weight: 300;
  text-decoration: underline;
  color: ${(props) => props.theme.colors.white};
`
const TextDelete = styled.h3`
  font-size: 14px;
  font-style: italic;
  font-weight: 300;
  text-decoration: underline;
  cursor: pointer;
  color: ${(props) => props.theme.colors.error};
`
const StyledFlex = styled.div`
  display: flex;
  margin-bottom: 13px;
`
const CategoryContainer = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  margin: 15px 0;
`
const CategoryName = styled.h2`
  font-size: 17px;
  font-weight: 700;
  line-height: 17px;
  color: ${(props) => props.theme.colors.white};
`
const CategoryImg = styled.img`
  width: 20.98px;
  height: 20px;
`
const DatePosted = styled.h5`
  font-size: 14px;
  font-style: italic;
  font-weight: 300;
  color: ${(props) => props.theme.colors.white};
`
const Price = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: rgba(0, 255, 10, 1);
  margin-top: 8px;
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
`
const Description = styled.h3`
  font-size: 14px;
  font-style: italic;
  font-weight: 300;
  line-height: 17px;
  margin: 10px 0;
  color: ${(props) => props.theme.colors.white};
`
const ContactContainer = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 20px;
`
const PhoneImg = styled.img`
  width: 30.75px;
  height: 30.75px;
`
const Number = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.white};
`
const TextContact = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
`

export default function Review ({title,date,price,description,category}){
  const router = useRouter()

  return(
    <ReviewContainer>
          <TextContainer>
              <ArrowImg src='/arrow-left.png' />
              <TextLink onClick={() => router.push('/')}>Voltar para a página inicial</TextLink>
          </TextContainer>
          <TilteContainer>
              <Title>{title}</Title>
              <StyledFlex>
                  <EditImg src='/edit.png'/>
                  <TextEdit>Editar</TextEdit>
              </StyledFlex>
              <StyledFlex>
                  <TrashImg src='/trash.png' />
                  <TextDelete onClick={handleDelete}>Deletar</TextDelete>
              </StyledFlex>
          </TilteContainer>
          <CategoryContainer>
            <CategoryImg src='/car-white.png' />
            <CategoryName>{category}</CategoryName>
          </CategoryContainer>
          <DatePosted>Postado {moment(date).format('LLL')}</DatePosted>
          <Price>{price}</Price>
          <DescriptionContainer>
              <Description>{description}</Description>
          </DescriptionContainer>
          <TextContact>Gostou? Entre em contato</TextContact>
          <ContactContainer>
            <PhoneImg src='/phone.png'/>
            <Number>(11) 98765-4321</Number>
          </ContactContainer>
          

         
    </ReviewContainer>
    
  )
}