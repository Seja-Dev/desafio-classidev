import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Navbar from "@/components/navbar/navbar";
import Search from "@/components/search/search";
import Classefields from "@/components/classifieds/classifields";
import Footer from "@/components/footer/footer";

const StyledDiv = styled.div`
  background: linear-gradient(to bottom, #424242 0%, #000000 100%);
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 150px 0;
`

const ClassefieldsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-content: center;
  margin-left: 40px;
  margin-bottom: 150px;
`

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://api-products-nine.vercel.app/products')
        setProducts(response.data)
      } catch (error) {
        console.error('Erro ao buscar notas:', error)
      }
    }

    fetchProducts()
  }, [])

  return (
    <StyledDiv>
      <Navbar button />
      <SearchContainer>
        <Search />
      </SearchContainer>
      <ClassefieldsContainer>
        {products.map((product) => (
          <Classefields
            key={product._id}
            category={product.category}
            product={product.product}
            price={product.price}
            description={product.description}
          />
        ))}
      </ClassefieldsContainer>
      <Footer />
    </StyledDiv>
  )
}

export default HomePage