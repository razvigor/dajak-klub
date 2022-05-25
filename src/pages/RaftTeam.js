import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import ExcerptPost from '../components/ExcerptPost';
import './RaftTeam.scss'

const RaftTeam = () => {
  const [posts, setPosts] = useState(null)
  const ref = useRef(true)
  useEffect(() => {
    return function() {
      ref.current = false;
    }
  })
  useEffect(() => {
    if (ref) {
      axios.get('http://mbportfolio.info/api/wp-json/wp/v2/posts?categories=5')
      .then(res => {
        console.log(res)
        setPosts(res.data)
      }).catch(err => {
        console.log(err)
      })
    }
  }, [])
  const content = posts !== null ? posts.map(item => {
  return <ExcerptPost key={item.id} excerpt={item.excerpt.rendered} imgSrc={`http://mbportfolio.info/api/wp-json/wp/v2/media/${item.featured_media}`} title={item.title.rendered} urlToPost={`/blog/${item.id}`} />
  }) : null;
  return (
    <div className='raft-team'>
      <h1>Raft Tim</h1>
      <div className='container'>
      {content}
      </div>
      </div>
  )
}

export default RaftTeam