import styled from "styled-components";
import moment from 'moment'

import { useRouter } from "next/router";


const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 110px;
  width: 100%;
`
const StyledCard = styled.div`
  width: 334px;
  height: 313px;
  top: 444px;
  left: 473px;
  border-radius: 10px;
  background: rgba(217, 217, 217, 1);
  padding: 25px;
  :hover{
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
`
const Title = styled.h2`
  font-size: 39px;
  font-weight: 700;
  line-height: 44px;
  text-align: left;
`
const DatePosted = styled.h5`
  font-size: 14px;
  font-style: italic;
  font-weight: 300;
  line-height: 17px;
  text-align: left;
  color: ${(props) => props.theme.colors.textSubColor};
`
const Price = styled.h4`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  margin: 15px 0;
`
const Description = styled.p`
  font-size: 14px;
  font-style: italic;
  font-weight: 300;
  line-height: 17px;
  text-align: left;
  color: ${(props) => props.theme.textSubColor};
`
const CategoryContainer = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  margin-top: 28px;
`
const CategoryName = styled.h2`
  font-size: 17px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
`
const CategoryImg = styled.img`
  width: 20.98px;
  height: 20px;
`

export default function Card({ title, date, price, description, category }){
  const router = useRouter()

  return(
        <CardContainer>
            <StyledCard onClick={() => router.push('/reviewAnnouncement')} >
                <Title>{title}</Title>
                <DatePosted>{moment(date).format('LLL')}</DatePosted>
                <Price>{price}</Price>
                <Description>{description}</Description>
                <CategoryContainer>
                    <CategoryImg src='/car.png'/>
                    <CategoryName>{category}</CategoryName>
                </CategoryContainer>
            </StyledCard>
        </CardContainer>
      
  
    

  )
}
