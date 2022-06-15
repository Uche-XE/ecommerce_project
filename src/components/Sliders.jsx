import {useState} from 'react'
import {NavLink} from "react-router-dom"
import {IoIosArrowDropleftCircle as IoIosArrowDropLeftCircle,IoIosArrowDroprightCircle as IoIosArrowDropRightCircle} from "react-icons/io"
import { sliderItems } from './data'
import { Container, Arrow, Wrapper, Slides, Image, ImgContainer, DetailsContainer, Title, Description, Button } from '../styled-component/styles'




const Sliders = () => {
const [pic, setPic] = useState({
  index: 0,
  image: sliderItems[0].img,
  name: sliderItems[0].name,
  title: sliderItems[0].title,
  Description: sliderItems[0].Description

});



const handleLeftClick = () => {
  if (pic.index > 0)
  setPic({
    index: pic.index - 1,
    image: sliderItems[pic.index - 1].img,
    name: sliderItems[pic.index - 1].name,
    title: sliderItems[pic.index -1].title,
    Description: sliderItems[pic.index -1].Description
  });
}

const handleRightClick = () => {
  if (pic.index < 2)
  setPic({
    index: pic.index + 1,
    image: sliderItems[pic.index + 1].img,
    name: sliderItems[pic.index + 1].name,
    title: sliderItems[pic.index +1].title,
    Description: sliderItems[pic.index +1].Description
  });
};

 
 

  return (
    <Container>
      
<Arrow direction="left" onClick={handleLeftClick}>

        <IoIosArrowDropLeftCircle/>
</Arrow>

<Wrapper>
  

 <Slides bg={pic.bg}>

  <ImgContainer>

     <Image src={pic.image} alt={pic.name}/>

  </ImgContainer>

<DetailsContainer>
    <Title>{pic.title}</Title>
    <Description>GIVE YOURSELF A TREAT! 40% OFF ON ALL ITEMS</Description>
    <Description>{pic.Description}</Description>
    <NavLink to="/products"><Button>SHOP NOW</Button></NavLink>
</DetailsContainer>
     
     </Slides> 
  
    </Wrapper>
  
<Arrow direction="right" onClick={handleRightClick}>

   <IoIosArrowDropRightCircle/>
</Arrow>
    </Container>
  )
  }


export default Sliders