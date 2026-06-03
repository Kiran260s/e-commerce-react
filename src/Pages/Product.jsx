import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/Product/ProductCard';
import axios from 'axios';

const Product = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  async function GetData() {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');     
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    GetData()
  }, [])

  if (loading) {
    return (
      <div className='text-white text-3xl text-center mt-20'>
        Loading
      </div>
    );
  }

  return (
    <section>

      <h1 className='text-white text-4xl font-bold text-center mb-10'>
        Products Page
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {
          products.map((item) => (
            <ProductCard
              key={item.id}
              img={item.image}
              title={item.title}
              price={item.price}
              Product = {item}
            />
          ))
        }
      </div>

    </section>
  )
}

export default Product