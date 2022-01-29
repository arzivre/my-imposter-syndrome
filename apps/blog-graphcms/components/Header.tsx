import { useState, useEffect, Key } from 'react'
import NextLink from 'next/link'

import { getCategories } from '../services'

import { CategoriesState, CategoryMap } from '../types/categories'

export default function Header() {
  const [categories, setCategories] = useState<CategoriesState | []>([])

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories)
    })
  }, [])

  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-blue-400'>
        <section className='md:float-left block'>
          <NextLink href='/' passHref>
            <span className='cursor-pointer font-bold text-4xl text-white'>
              GraphCMS
            </span>
          </NextLink>
        </section>
        <section className='hidden md:float-left md:contents'>
          {categories.map((category: CategoryMap, index: Key) => (
            <NextLink key={index} href={`/category/${category.slug}`} passHref>
              <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                {category.name}
              </span>
            </NextLink>
          ))}
        </section>
      </div>
    </div>
  )
}
