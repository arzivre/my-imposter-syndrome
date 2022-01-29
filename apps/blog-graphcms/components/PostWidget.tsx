/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import NextLink from 'next/link'
import moment from 'moment'
import { getRecentPosts, getSimilarPosts } from '../services'

type PostWidgetProps = {
  categories?: string
  slug?: string
}

export default function PostWidget({ categories, slug }: PostWidgetProps) {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result)
      })
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result)
      })
    }
  }, [slug, categories])

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className='flex items-center w-full mb-4'>
          <div className='w-16 flex-none'>
            <img
              alt={post.title}
              height='60px'
              width='60px'
              className='align-middle rounded-full'
              src={post.featuredImage.url}
            />
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-gray-500 font-xs'>
              {moment(post.createdAt).format('DD MMMM, YYYY')}
            </p>
            <NextLink href={`/post/${post.slug}`} key={index} passHref>
              <a className='text-md'>{post.title}</a>
            </NextLink>
          </div>
        </div>
      ))}
    </div>
  )
}
