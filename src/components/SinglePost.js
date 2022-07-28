import React from 'react'
import './SinglePost.scss'

const SinglePost = (props) => {
  return (
    <section className='single-post'>
        <h2>{props.title}</h2>
        <div dangerouslySetInnerHTML={{__html: props.content}} />
    </section>
  )
}

export default SinglePost