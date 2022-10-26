import { useState } from "react";

import './Product.css'
import Variation from './Variation'

function Product({productInfo}){
  let [selectedVariation, setSelectedVariation] = useState(productInfo[0].productVarCode)
  let [index, setIndex] = useState(0)

  function changeVariation(selectedCode){
    setIndex(productInfo.map(object => object.productVarCode).indexOf(selectedCode));
    setSelectedVariation(selectedCode)
  }

  return(
    <div className="product-card">
      <img src={productInfo[index].image} alt="" draggable="false"/>
      <div className='info-container'>
        <div className="variation-container"> 
          {
            productInfo.map((e, index) => {
              return(
                <Variation variationColor={productInfo[index].color} code={productInfo[index].productVarCode} selected={productInfo[index].productVarCode === selectedVariation ? true : false} changeVariation={changeVariation}/>
              )
            })
          }
        </div>
        <h1>R$ 500,00</h1>
        <h2>Faux Suede Mini Skirt</h2>
        <h3>A faux suede mini skirt featuring exposed button-front closures and panel seam construction.</h3>
        <div className="product-cart-button">Adicionar</div>
      </div>
    </div>
  )
}

export default Product
