import styled from "styled-components"
import { useRouter } from "next/router"
import axios from "axios"
import { useState } from "react"

import Navbar from "@/components/navbar/navbar"
import Back from "@/components/layout/back/back"
import Container from "@/components/layout/container/container"
import Date from "@/components/layout/date/date"
import Class from "@/components/layout/class/class"
import Footer from "@/components/footer/footer"
import ConfirmDelete from "@/components/confirmDelete/confirmDelete"
import EditForm from "@/components/form/editForm/editForm"

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

export default function Post() {
    const router = useRouter()
    const { 
        category,
        product, 
        price: initialPrice,
        description: initialDescription, 
        whatsapp: initialWhatsapp, 
        _id 
    } = router.query
    const [ isDeleteConfirm, setIsDeleteConfirm ] = useState(false)
    const [ isEdit, setIsEdit ] = useState(false)

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`https://api-products-nine.vercel.app/products/${_id}`)
            console.log('Produto excluído com sucesso:', response.data)
            router.push('/')
        } catch (error) {
            console.error('Erro ao excluir produto:', error)
        }
    }

    const handleDeleteConfirm = () => {
        setIsDeleteConfirm(!isDeleteConfirm)
    }

    const handleEdit = () => {
        setIsEdit(!isEdit)
    }

    return(
        <StyledDiv>
            <Navbar/>
            <Container>
                <Back/>
                <ProductContainer>
                    <Product>{product}</Product>
                    <DeleteOrEdit onClick={handleEdit}>
                        <img src="edit.png" width="15px" height="15px"/>
                        <p>Editar</p>
                    </DeleteOrEdit>
                    { isEdit && 
                        <EditForm
                        productId={_id}
                        initialPrice={initialPrice}
                        initialDescription={initialDescription}
                        initialWhatsapp={initialWhatsapp}
                        onClick={handleEdit}
                    />
                    }

                    <DeleteOrEdit onClick={handleDeleteConfirm} deleted>
                        <img src="delete.png" width="15px" height="15px"/>
                        <p>Deletar</p>
                    </DeleteOrEdit>
                </ProductContainer>
                { isDeleteConfirm && 
                    <ConfirmDelete
                        onClick={handleDelete}
                        cancelOnclick={handleDeleteConfirm}
                    />
                }
                <InfoContainer>
                    <Class
                        category={category}
                        white
                    />
                    <Date white>22/02/2022</Date>
                    <Price> R$ {initialPrice}</Price>
                    <Description>{initialDescription}</Description>
                    <Notice>Gostou? Entre em contato</Notice>
                    <ContactContainer>
                        <img src="telefone.png"/>
                        <Contact>{initialWhatsapp} </Contact>
                    </ContactContainer>
                </InfoContainer>
            </Container>
            <Footer/>
        </StyledDiv>
    )
}