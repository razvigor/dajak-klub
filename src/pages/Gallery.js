import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Gallery.scss';

const Gallery = () => {
	const [galleryCategories, setGalleryCategories] = useState(null);

	useEffect(() => {
		axios
			.get(
				`https://mbportfolio.info/api/wp-json/wc/v3/products?consumer_key=ck_98bea202d0803592c21e92993b57e00cb57c405a&consumer_secret=cs_3c76fe2d3bd561770419b4a692b555fe44696c4f`
			)
			.then((res) => {
				console.log(res.data);
				setGalleryCategories(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const content =
		galleryCategories !== null
			? galleryCategories.map((item) => {
					return (
						<div className='gallery-item' key={item.id}>
							<h3>{item.name}</h3>
							<div className='image-container'>
								<a href={`galerija/${item.id}`}>
									<img src={item.images[0].src} alt={item.name} />
								</a>
							</div>
						</div>
					);
			  })
			: null;

	return (
		<div className='gallery'>
			{content !== null ? content : <p>Loader...</p>}
		</div>
	);
};

export default Gallery;
