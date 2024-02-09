import styled from "styled-components"
import Link from "next/link"

import Class from "../layout/class/class"
import Date from "../layout/date/date"

const StyledClass = styled.div`
    width: 334px;
    height: 313px;
    border-radius: 10px;
    background-color: #D9D9D9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 29px;
    padding: 0 24px;
    cursor: pointer;
`

const ProductsAndDate = styled.div`
    display: flex;
    flex-direction: column;
`

const Product = styled.h2`
    font-size: 36px;
    font-weight: 700;
    line-height: normal;
`

const Price = styled.h4`
    color: #0E0E0E;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    position: relative;
    bottom: 16px;
`

const Description = styled.p`
    font-size: 14px;
    font-style: italic;
    font-weight: 300;
`

export default function Classefields({ category, product, price, date, description }) {
    return(
        <Link href="/post">
            <StyledClass>
                <ProductsAndDate>
                    <Product>{product}</Product>
                    <Date>{date}</Date>
                </ProductsAndDate>
                <Price>R$ {price}</Price>
                <Description>{description}</Description>
                <Class
                    category={category}
                />
            </StyledClass>
        </Link>
    )
}