import styledComponents from "styled-components"
import Bulletin from "../components/Bulletin"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"



const Container = styledComponents.div`

`

const Title = styledComponents.h1`
margin: 20px;
`

const FilterContainer = styledComponents.div`
Display: flex;
justify-content: space-between;

`

const Filter = styledComponents.div`
margin: 20px;

`
const FilterText = styledComponents.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
`

const Select = styledComponents.select`
padding: 10px;
margin-right: 20px;
`

const Option = styledComponents.option`

`

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Bulletin/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>

                <Select>

                <Option disabled selected>Color</Option>
                <Option>White</Option>
                <Option>Red</Option>
                <Option>Green</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Black</Option>

                </Select>

                <Select>

                <Option disabled selected>Size</Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
                <Option>XXL</Option>

                </Select>
            </Filter>

            <Filter>
                <Select>
                <FilterText>Sort Products:</FilterText>
                <Option selected>Newest</Option>
                <Option>Price (High)</Option>
                <Option>Price (Low)</Option>
                </Select>

            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList