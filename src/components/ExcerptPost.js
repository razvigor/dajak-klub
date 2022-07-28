import React from 'react'
import { Link } from 'react-router-dom'
import './ExcerptPost.scss'

const ExcerptPost = (props) => {
  return (
    <article className='excerpt-post'>
      <img src={props.imgSrc} alt={props.title} />
        <h3>{props.title}</h3>
        <div dangerouslySetInnerHTML={{__html: props.excerpt}} />
        
        <div className='btn-group'>
        <Link to={props.urlToPost} className='btn'>Vidi vise</Link>
        </div>
    </article>
  )
}

export default ExcerptPost