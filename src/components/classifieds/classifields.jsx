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

export default function Classefields({ category }) {
    return(
        <Link href="/post">
            <StyledClass>
                <ProductsAndDate>
                    <Product>Palio 2020</Product>
                    <Date>Postado em 22/02/2022</Date>
                </ProductsAndDate>
                <Price>R$ 20.000,00</Price>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</Description>
                <Class
                    category={category}
                />
            </StyledClass>
        </Link>
    )
}