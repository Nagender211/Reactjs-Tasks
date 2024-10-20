import React from 'react'

const AllProducts = (props) => {
    const {product}=props;
    const {brand,id,imageUrl,price,title,rating}=product
  return (
    <div>
     
      <h4>brand: {brand}</h4>
      <img src={imageUrl} alt={title} />
      <h5>id: {id}</h5>
      <h5>title: {title}</h5>
      <h5>rating: {rating}</h5>

      <h5>price: {price}</h5>

    </div>
  )
}

export default AllProducts
