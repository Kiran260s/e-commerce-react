import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/Product/ProductCard';
import axios from 'axios';

const Product = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [selectedCategory, setselectedCategory] = useState("all")

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

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category))
  ]

  const FilteredProduct = products.filter((product) => {
    const title = product.title.toLowerCase()
    const searchTerm = search.toLowerCase()

    const matchCategory = 
    selectedCategory === "all" ||
    product.category === selectedCategory;

    return matchCategory && title.includes(searchTerm)
  })

  return (
    <section>

      <h1 className='text-white text-4xl font-bold text-center mb-10'>
        Products Page
      </h1>

      <div className='flex justify-center mb-7'>
        <input
          type="text"
          placeholder='Search Product'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='w-full max-w-md px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white outline-none
            focus:border-blue-500'
        />
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setselectedCategory(category)}
            className={`px-4 py-2 rounded-lg ${selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-700 text-white'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {
        FilteredProduct.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {
              FilteredProduct.map((item) => (
                <ProductCard
                  key={item.id}
                  img={item.image}
                  title={item.title}
                  price={item.price}
                  Product={item}
                />
              ))
            }
          </div>
        ) : (
          <p className='text-center text-white text-2xl'>
            Product not found
          </p>
        )

      }

    </section>
  )
}

export default Product