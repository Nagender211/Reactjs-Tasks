import React, { Component } from 'react'
import Products from './Products'
import Header from './Header'
import Cookies from 'js-cookie'

class AllProducts extends Component{
    state={
        productsList: [],

    }
    componentDidMount(){
        this.getApiData();
    }
    getApiData=async()=>{
        const jwtToken=Cookies.get('jwt-token');

        const ulr='https://apis.ccbp.in/products'
        const options={
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwtToken}`
            },
        }
        const response=await fetch(ulr, options);
      
        if(response.ok===true){

            const data=await response.json();
            const update=data.products.map(product=>({
                brand: product.brand,
                id: product.id,
                imageUrl: product.image_url,
                price: product.price,
                rating: product.rating,
                title: product.title
            }))
            this.setState({productsList: update})


        }
    }
    
    render() {
        const {productsList}=this.state
      return (
        <div>
            <Header />
          {productsList.map(each=>(
            <Products key={each.id} product={each}/>
          ))}
        </div>
      )
    }
}

export default AllProducts
