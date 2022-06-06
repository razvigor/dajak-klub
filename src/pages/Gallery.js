import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Gallery.scss';

const Gallery = () => {
	const [galleryCategories, setGalleryCategories] = useState(null);

	useEffect(() => {
		axios
			.get(
				`https://mbportfolio.info/api/wp-json/wp/v2/posts?categories=3&_embed&per_page=10&page=1`
			)
			.then((res) => {
				// console.log(res.data)
				setGalleryCategories(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const content =
		galleryCategories !== null
			? galleryCategories.map((item) => {
					if (item['_embedded']['wp:featuredmedia'] !== undefined) {
						console.log(item['_embedded']['wp:featuredmedia'][0]['source_url']);
						return (
							<div className='gallery-item' key={item.id}>
								<h3>{item.title.rendered}</h3>
								<div className='image-container'>
									<a href={`galerija/${item.id}`}>
										<img
											src={
												item['_embedded']['wp:featuredmedia'][0]['source_url']
											}
											alt={item.title.rendered}
										/>
									</a>
								</div>
							</div>
						);
					}
			  })
			: null;

	return <div>{content}</div>;
};

export default Gallery;
