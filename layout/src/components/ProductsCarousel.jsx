import Carousel from 'react-elastic-carousel'
import Product from './Product'

import './ProductsCarousel.css'

import productImg01 from '../assets/imgs/product01.png'
import productImg02 from '../assets/imgs/product02.png'

const produto1 = [
  {
    image : productImg01,
    color : "#DEAC71",
    productVarCode: "01"
  },
  {
    image : productImg02,
    color : "#D37164",
    productVarCode: "02"
  },
  {
    image : productImg01,
    color : "#6497D3",
    productVarCode: "03"
  },
  {
    image : productImg02,
    color : "#353535",
    productVarCode: "04"
  }
]

const breakPoints = [
  { width: 1, itemsToShow: 1},
  { width: 550, itemsToShow: 2},
  { width: 768, itemsToShow: 3},
  { width: 1200, itemsToShow: 5}
]

function ProductsCarousel(){
  return(
    <div className='productsCarousel'>
      <h1 className='productsCarousel-titulo'>As Mais Pedidas</h1>
      <Carousel breakPoints={breakPoints}>
        <Product productInfo={produto1}/>
        <Product productInfo={produto1}/>
        <Product productInfo={produto1}/>
        <Product productInfo={produto1}/>
        <Product productInfo={produto1}/>
        <Product productInfo={produto1}/>
        <Product productInfo={produto1}/>
        <Product productInfo={produto1}/>
        <Product productInfo={produto1}/>
        <Product productInfo={produto1}/>
        <Product productInfo={produto1}/>
        <Product productInfo={produto1}/>
        <Product productInfo={produto1}/>
        <Product productInfo={produto1}/>
        <Product productInfo={produto1}/>
      </Carousel>
    </div>
  )
}

export default ProductsCarousel