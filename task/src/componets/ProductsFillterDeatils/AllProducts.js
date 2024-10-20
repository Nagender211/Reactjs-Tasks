import React from 'react'
import { Link } from 'react-router-dom';

const AllProducts = (props) => {
    const {product,updateId}=props;
    const {brand,id,imageUrl,price,title,rating}=product
    const handleClick = () => {
        updateId(id)
    }
  return (
    <div>
     <Link to={`/product-details/${id}`}>
      <h4>brand: {brand}</h4>
      <img src={imageUrl} alt={title} />
      <h5>id: {id}</h5>

      <h5 onClick={handleClick}>title: {title}</h5>
      <h5>rating: {rating}</h5>

      <h5>price: {price}</h5>
      </Link>

    </div>
  )
}

export default AllProducts
