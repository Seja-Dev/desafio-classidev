import styled from "styled-components"

import Navbar from "@/components/navbar/navbar"
import Back from "@/components/layout/back/back"
import Container from "@/components/layout/container/container"
import Date from "@/components/layout/date/date"
import Class from "@/components/layout/class/class"
import Footer from "@/components/footer/footer"

const StyledDiv = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: #0e0e0e;
`

const ProductContainer = styled.div`
    display: flex;
    align-items: end;
    gap: 20px;
    margin-top: 50px;
`

const Product = styled.h1`
    color: white;
    font-weight: bolder;
    font-size: 46px;
`

const DeleteOrEdit = styled.div`
    display: flex;
    gap: 7px;
    color: ${props => props.deleted ? 'red' : 'white'};
    text-decoration: underline;
    padding-bottom: 7px;
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 15px;
    margin-bottom: 200px;
`

const Price = styled.h3`
    font-size: 22px;
    font: 700;
    line-height: 24px;
    color:#00FF0A;
`

const Description = styled.h3`
    font-size: 14px;
    font-weight: lighter;
    color:#b4b3b3;
    width: 930px;
    margin: 40px 0;
`

const Notice = styled.h2`
    color: white;
    font-size: 24px;
`

const ContactContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`

const Contact = styled.h3`
    font-size: 16px;
    font-weight: 400;
    color: #cfcece;
`

export default function Post({ deleted }) {
    return(
        <StyledDiv>
            <Navbar/>
            <Container>
                <Back/>
                <ProductContainer>
                    <Product>Palio 2020</Product>
                    <DeleteOrEdit>
                        <img src="edit.png" width="15px" height="15px"/>
                        <p>Editar</p>
                    </DeleteOrEdit>

                    <DeleteOrEdit deleted>
                        <img src="delete.png" width="15px" height="15px"/>
                        <p>Deletar</p>
                    </DeleteOrEdit>
                </ProductContainer>
                <InfoContainer>
                    <Class
                        category="carros"
                        white
                    />
                    <Date white>22/02/2022</Date>
                    <Price>R$ 20.000,00</Price>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</Description>
                    <Notice>Gostou? Entre em contato</Notice>
                    <ContactContainer>
                        <img src="telefone.png"/>
                        <Contact>(88) 23232323 </Contact>
                    </ContactContainer>
                </InfoContainer>
            </Container>
            <Footer/>
        </StyledDiv>
    )
}