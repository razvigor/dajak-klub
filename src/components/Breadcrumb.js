import React from 'react'
import {Link} from 'react-router-dom'

const Breadcrumb = (props) => {
  return (
    <div className='breadcrumb'>
        <ul>
            <li><Link to="/">Početna</Link></li>
            <li>{props.page}</li>
        </ul>
    </div>
  )
}

export default Breadcrumb