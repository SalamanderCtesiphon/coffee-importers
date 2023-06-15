import React from 'react'
import { productsArray } from '../utility/inventory'
import ProductCard from '../components/ProductCard'
import './Shop.css'
import Icon from '@mdi/react'
import { mdiArrowRightBold } from '@mdi/js'


function Shop() {
  const tempArray= productsArray.filter((product) => {
    return product.category === "tops"
  })

  return (
    <div className='shop-page'>
      <h1>Shop</h1>
      <div className="product-display">
        {tempArray.map((product, idx) => (
          <div key={product.id}>
            <ProductCard product={product}></ProductCard>
          </div>
        ))}
      </div>
      <h3 className='btn-box'><a id='shop-button' href='/checkout'>Check Out<Icon path={mdiArrowRightBold} size={1} /></a></h3>
       
    </div>
  )
}

export default Shop