import styledComponents from 'styled-components'
import Bulletin from '../components/Bulletin'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'


const Container = styledComponents.div`

`

const Wrapper = styledComponents.div`
padding: 20px;

`

const Title = styledComponents.h1`
font-weight: 300;
text-align: center;
`

const Top = styledComponents.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`

const TopButton = styledComponents.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border:${props=>props.type === "filled" && "none"};
background-color:${props=>props.type === "filled" ? "red" : "transparent"};
color:${props=>props.type === "filled" && "whitesmoke"};
`

const UpperTexts = styledComponents.div`

`
const TopText = styledComponents.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;

`

const Bottom = styledComponents.div`
display: flex;
justify-content; space-between;
`

const Info = styledComponents.div`
flex: 3;
`

const Hr = styledComponents.hr`
background-color: lightgray;
border: none;
height: 1px;
`

const Summary = styledComponents.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;

`

const SummaryTitle = styledComponents.h1`
font-weight: 200;

`

const SummaryItem = styledComponents.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "24px"};
`

const SummaryText = styledComponents.span`

`

const SummaryPrice = styledComponents.span`

`

const SummaryButton = styledComponents.button`
width: 100%;
padding: 10px;
background-color: red;
color: white;
font-weight: 600;
`

const Product = styledComponents.div`
display: flex;
justify-content: space-between;
`

const ProductInfo = styledComponents.div`
flex: 2;
display: flex;


`
const Image = styledComponents.img `
width: 200px;
`
const Details = styledComponents.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const ProductName = styledComponents.span`

`
const ProductID = styledComponents.span`

`
const ProductColor = styledComponents.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color}
`
const ProductSize = styledComponents.span`

`

const PriceInfo = styledComponents.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`


const PriceContainer = styledComponents.span`
display: flex;
align-items: center;
margin-bottom: 20px;
`

const ProductAmount = styledComponents.span`
font-size: 24px;
margin: 5px;
`

const ProductPrice = styledComponents.span`
font-size: 30px;
font-weight: 200;
`



const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Bulletin/>
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>

                <TopButton>Continue Shopping</TopButton>

                <UpperTexts>
                    <TopText>Shopping Bag(4)</TopText>
                    <TopText>Wishlist(7)</TopText>
                </UpperTexts>
                <TopButton type='filled'>Checkout Now</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductInfo>
                            <Image src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                            <Details>
                                <ProductName><b>Product:</b> Nike Shoes</ProductName>
                                <ProductID><b>ID:</b> 84363647949</ProductID>
                                <ProductColor color='black'/>
                                <ProductSize><b>Size:</b> 44.5</ProductSize>
                            </Details>
                        </ProductInfo>
                        <PriceInfo>
                            <PriceContainer>
                                <IoMdAdd/>
                                <ProductAmount>1</ProductAmount>
                                <IoMdRemove/>
                            </PriceContainer>
                            <ProductPrice>€ 134.00</ProductPrice>
                        </PriceInfo>
                    </Product>
                <Hr/>
                    <Product>
                        <ProductInfo>
                            <Image src="https://images.unsplash.com/photo-1618354691229-88d47f285158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTcxfHxzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                            <Details>
                                <ProductName><b>Product:</b> Pullover</ProductName>
                                <ProductID><b>ID:</b> 84363647949</ProductID>
                                <ProductColor color='black'/>
                                <ProductSize><b>Size:</b> XL</ProductSize>
                            </Details>
                        </ProductInfo>
                        <PriceInfo>
                            <PriceContainer>
                                <IoMdAdd/>
                                <ProductAmount>1</ProductAmount>
                                <IoMdRemove/>
                            </PriceContainer>
                            <ProductPrice>€ 59.00</ProductPrice>
                        </PriceInfo>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryText>Subtotal</SummaryText>
                        <SummaryPrice>€ 193.00</SummaryPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryText>Estimated Shipping</SummaryText>
                        <SummaryPrice>Free</SummaryPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryText>Summer Discount</SummaryText>
                        <SummaryPrice>€ -8.74</SummaryPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryText>Total</SummaryText>
                        <SummaryPrice>€ 184.26</SummaryPrice>
                    </SummaryItem>
                    <SummaryButton>Checkout Now</SummaryButton>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart