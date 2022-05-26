import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ExcerptPost from '../components/ExcerptPost';
import './RaftTeam.scss';

const RaftTeam = () => {
	const [posts, setPosts] = useState(null);
	const [page, setPage] = useState(1);
	const ref = useRef(true);
	useEffect(() => {
		return function () {
			ref.current = false;
		};
	});
	useEffect(() => {
		if (ref) {
			axios
				.get(
					`http://mbportfolio.info/api/wp-json/wp/v2/posts?categories=5&_embed&per_page=6&page=${page}`
				)
				.then((res) => {
					console.log(res);
					setPosts(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [page, setPage]);
	const content =
		posts !== null
			? posts.map((item) => {
					return (
						<ExcerptPost
							key={item.id}
							excerpt={item.excerpt.rendered}
							imgSrc={
								item['_embedded']['wp:featuredmedia'][0]['media_details'][
									'sizes'
								]['medium']['source_url']
							}
							title={item.title.rendered}
							urlToPost={`/blog/${item.id}`}
						/>
					);
			  })
			: null;
	return (
		<div className='raft-team'>
			<h1>Raft Tim</h1>
			<div className='container'>{content}</div>
		</div>
	);
};

export default RaftTeam;
