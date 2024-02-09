import styled from "styled-components"

import Navbar from "@/components/navbar/navbar"
import Back from "@/components/layout/back/back"
import Container from "@/components/layout/container/container"

const StyledDiv = styled.div`
    height: 100vh;
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
            </Container>
        </StyledDiv>
    )
}