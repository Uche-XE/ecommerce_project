import styledComponents from 'styled-components'
export const Container = styledComponents.div`
width: 100vw;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
`

export const Arrow = styledComponents.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props=>props.direction === "left" && "10px"};
right: ${props=>props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;
`;

export const Wrapper = styledComponents.div`
height: 100%;
display: flex;
transform: translateX(-100vw)
transition: all 1.5s ease;
`

export const Slides = styledComponents.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props=>props.bg};
`

export const ImgContainer = styledComponents.div`
height: 100%;
flex: 1;
`
export const Image = styledComponents.img`
height: 80%;

`

export const DetailsContainer = styledComponents.div`
flex: 1;
padding: 50px;
`
export const Title = styledComponents.h1`
font-size: 70px;
`
export const Description = styledComponents.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`
export const Button = styledComponents.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`

