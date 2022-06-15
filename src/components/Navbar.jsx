import React from 'react'
import styledComponents from 'styled-components'
import {GoSearch} from "react-icons/go"
import {ImCart} from "react-icons/im"
import { NavLink } from 'react-router-dom'




const Container = styledComponents.div`
height: 60px;
`

const Wrapper = styledComponents.div`
padding: 10px 30px;
display: flex;
justify-content: space-between;
align-items: center;

`
const Left = styledComponents.div`
flex:1;
display: flex;
align-items: center;
`
const Language = styledComponents.span`
font-size: 14px;
cursor: pointer;
`
const SearchContainer = styledComponents.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`

const Input =styledComponents.input`
border: none;
`

const Center = styledComponents.div`
flex:1;
text-align: center
`
const Logo = styledComponents.h1`
font-weight: bold;
font-family: 'Monoton', cursive;
`


const Right = styledComponents.div`
flex:1;
display: flex;
align-items: center;
justify-content: space-around;
`

const MenuLink = styledComponents.div`
font-size = 14px;
cursor: pointer;
margin-left: 12px; 
`


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
        <Left>
        <Language>EN</Language>
        <SearchContainer>
        <Input/>
        <GoSearch />
            
        </SearchContainer>
        </Left>
        <Center><Logo>TREATS</Logo></Center>
        <Right>
            <NavLink to="/register"><MenuLink>REGISTER</MenuLink></NavLink>
            <NavLink to="/login"><MenuLink>LOGIN</MenuLink></NavLink>
            <NavLink to="/cart"><MenuLink><ImCart/></MenuLink></NavLink>
        </Right>
        
        </Wrapper>
        </Container>
  )
}

export default Navbar