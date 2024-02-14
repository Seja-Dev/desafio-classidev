import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import styled from "styled-components"
import moment from "moment"

import Navbar from "@/components/navbar/navbar"
import Search from "@/components/search/search"
import Classefields from "@/components/classifieds/classifields"
import Footer from "@/components/footer/footer"

const StyledDiv = styled.div`
  background: linear-gradient(to bottom, #424242 0%, #000000 100%);
  display: flex;  
  flex-direction: column;
  min-height: 100vh;
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
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const router = useRouter()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://api-products-nine.vercel.app/products')
        setProducts(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error)
      }
    }

    fetchProducts();
  }, [])

  useEffect(() => {
    setFilteredProducts(products.filter(product => product.product.toLowerCase().includes(searchTerm.toLowerCase()) && (selectedCategory === "" || product.category === selectedCategory)))
  }, [searchTerm, selectedCategory, products])

  const handleProductClick = (product) => {
    router.push({
      pathname: '/post',
      query: product,
    })
  }

  return (
    <StyledDiv>
      <Navbar button />
      <SearchContainer>
      <Search setSearchTerm={setSearchTerm} setSelectedCategory={setSelectedCategory} />
      </SearchContainer>
      <ClassefieldsContainer>
        {filteredProducts.map((product) => (
          <Classefields
            key={product._id}
            category={product.category}
            product={product.product}
            price={product.price}
            description={product.description}
            date={moment(product.createdAt).format('DD/MM/YYYY')}
            onClick={() => handleProductClick(product)}
          />
        ))}
      </ClassefieldsContainer>
      <Footer />
    </StyledDiv>
  )
}

export default HomePage;
