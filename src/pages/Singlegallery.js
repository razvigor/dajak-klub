import React, {useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Singlegallery = () => {
  const {galleryId} = useParams()
  useEffect(() => {
    axios.get(`http://mbportfolio.info/api/wp-json/wp/v2/posts/${galleryId}`).then((res) => {
      console.log(res.data)
    })
  }, [])
  return (
    <div>Singlegallery</div>
  )
}

export default Singlegallery