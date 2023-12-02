import React from 'react'
import { getPostCategory } from '../api'

const LeftMenu = () => {
  const categories = getPostCategory()

  return categories.map((categorie) => {
    return (
      <div className='text-lg text-gray-600'>
        <ul>
          <li className='mb-3 p-1 ms-3 align-middle hover:bg-violet-200 hover:cursor-pointer rounded'><span className='px-3 pt-1 me-2 bg-black'></span>{categorie}</li>
        </ul>
      </div>
    )
  })
}

export default LeftMenu