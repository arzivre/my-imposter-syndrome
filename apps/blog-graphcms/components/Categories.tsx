import {
  useState,
  useEffect,
  Key,
} from 'react'
import NextLink from 'next/link'

import { getCategories } from '../services'

import { CategoriesState, CategoryMap } from '../types/categories'



export default function Categories() {
  const [categories, setCategories] = useState<CategoriesState | []>([])

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories)
    })
  }, [])

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Categories</h3>
      {categories.map((category: CategoryMap, index: Key) => (
        <NextLink key={index} href={`/category/${category.slug}`} passHref>
          <span
            className={`cursor-pointer block ${
              index === categories.length - 1 ? 'border-b-0' : 'border-b'
            } pb-3 mb-3`}
          >
            {category.name}
          </span>
        </NextLink>
      ))}
    </div>
  )
}
