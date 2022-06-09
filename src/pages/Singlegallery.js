import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Fancybox from '../components/Fancybox';
import './Singlegallery.scss'

const Singlegallery = () => {
	const { galleryId } = useParams();
  const [data, setData] = useState(null)
	useEffect(() => {
		axios
			.get(`https://mbportfolio.info/api/wp-json/wc/v3/products/${galleryId}?consumer_key=ck_98bea202d0803592c21e92993b57e00cb57c405a&consumer_secret=cs_3c76fe2d3bd561770419b4a692b555fe44696c4f`)
			.then((res) => {
				console.log(res.data);
        setData(res.data)
			}).catch(err => {
        console.log(err)
      })
	}, []);
  const content = Boolean(data) ? data.images.map((item) => {
    return (<a key={item.id} data-fancybox="gallery" href={item.src}>
      <img src={item.src} alt={item.alt} />
    </a>)
  }) : <p>Loader...</p>;
	return <div className='gallery-item'>
    <div className='container'>
    <h2>{data !== null ? data.name : null}</h2>
    <div className='images'>
    <Fancybox options={{ infinite: false }}>
      {content}
    </Fancybox>
    </div>
    </div>
  </div>;
};

export default Singlegallery;
