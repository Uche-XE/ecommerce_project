import React from 'react'
import styledComponents from 'styled-components'
import { categories } from './data'
import ItemsCategory from './ItemsCategory'


const Container = styledComponents.div`
display: flex;
padding: 20px;
justify-content: space-between;

`

const Categories = () => {
  return (
    <Container>
        {categories.map(item=>(
            <ItemsCategory item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Categories