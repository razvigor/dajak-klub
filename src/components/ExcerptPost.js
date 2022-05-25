import React from 'react'
import { Link } from 'react-router-dom'
import './ExcerptPost.scss'

const ExcerptPost = (props) => {
  return (
    <article className='excerpt-post'>
        <div dangerouslySetInnerHTML={{__html: props.excerpt}} />
        <img src={props.imgSrc} alt={props.title} />
        <div className='btn-group'>
        <Link to={props.urlToPost} className='btn'>Vidi vise</Link>
        </div>
    </article>
  )
}

export default ExcerptPost