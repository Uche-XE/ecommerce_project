import styledComponents from "styled-components"
import Bulletin from "../components/Bulletin"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import {MdRemove, MdAdd} from "react-icons/md"


const Container = styledComponents.div`

`

const Wrapper = styledComponents.div`
padding: 50px;
display: flex;

`

const ImgContainer = styledComponents.div`
flex: 1;
`

const Image = styledComponents.img`
width: 100%;
height: 90vh;
object-fit: cover;
`

const InfoContainer = styledComponents.div`
flex: 1;
padding: 0px 50px;
`

const Title = styledComponents.h1`
font-weight: 200;
`

const Description = styledComponents.p`
margin: 20px 0px;
`

const Price = styledComponents.span`
font-weight: 100;
font-size: 40px;
`
const FilterContainer = styledComponents.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
`

const Filter = styledComponents.div`
display: flex;
align-items: center;
`

const FilterTitle = styledComponents.span`
font-size: 20px;
font-weight: 200;
`

const FilterColor = styledComponents.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px;
cursor: pointer;
`

const FilterSize = styledComponents.select`
margin-left: 10px;
padding: 5px;
`

const FilterSizeOption = styledComponents.option`

`

const AddContainer = styledComponents.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`

const AmountContainer = styledComponents.div`
display: flex;
align-items: center;
font-weight: 700;
`

const Amount = styledComponents.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`

const Button = styledComponents.button`
padding: 15px;
border: 2px solid teal;
background-color: whitesmoke;
cursor: pointer;
font-weight: 500;

&:hover{
    background-color: lightgray;
}
`


const Product = () => {
  return (
    <Container>
     <Navbar/>
     <Bulletin/>
     <Wrapper>
         <ImgContainer>
         <Image src="https://images.unsplash.com/photo-1592301933927-35b597393c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA3fHxjbG90aGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
         </ImgContainer>

         <InfoContainer>

             <Title>Beige Skirt</Title>

             <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorum, exercitationem maxime rem id nostrum perferendis cumque, sunt, itaque facilis rerum corrupti quod nemo nam labore. Est dolores </Description>

             <Price>€ 30</Price>

             <FilterContainer>

                 <Filter>
                 <FilterTitle>Color</FilterTitle>
                 <FilterColor color="black"/> 
                 <FilterColor color="red"/>
                 <FilterColor color="blue"/>
                 </Filter>

                 <Filter>
                 <FilterTitle>Size</FilterTitle>
                 <FilterSize>

                     <FilterSizeOption>XS</FilterSizeOption>
                     <FilterSizeOption>S</FilterSizeOption>
                     <FilterSizeOption>M</FilterSizeOption>
                     <FilterSizeOption>L</FilterSizeOption>
                     <FilterSizeOption>XL</FilterSizeOption>   <FilterSizeOption>XXL</FilterSizeOption>
                     
                 </FilterSize>
                 </Filter>
                
             </FilterContainer>


             <AddContainer>
                 <AmountContainer>
                     <MdRemove/>
                     <Amount>1</Amount>
                     <MdAdd/>
                 </AmountContainer>
                    <Button>ADD TO CART</Button>

             </AddContainer>
         </InfoContainer>
     </Wrapper>
     <Newsletter/>
     <Footer/>
    </Container>
  )
}

export default Product