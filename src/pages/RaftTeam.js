import React, { useState, useEffect, useRef, useMemo } from 'react';
import axios from 'axios';
import ExcerptPost from '../components/ExcerptPost';
import Pagination from '../components/pagination/Pagination';
import './RaftTeam.scss';
const pageSize = 10;
const RaftTeam = () => {
	const [posts, setPosts] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

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
					`http://mbportfolio.info/api/wp-json/wp/v2/posts?categories=5&_embed&per_page=6&page=${currentPage}`
				)
				.then((res) => {
					console.log(res);
					setPosts(res.data);
					setTotalPages(parseInt(res.headers['x-wp-totalpages']));
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			return;
		}
	}, [currentPage, setCurrentPage]);
	const content =
		posts !== null
			? posts.map((item) => {
					return (
						<ExcerptPost
							key={item.id}
							excerpt={item.excerpt.rendered}
							imgSrc={item['_embedded']['wp:featuredmedia'][0]['source_url']}
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
			<Pagination
				className='pagination-bar'
				currentPage={currentPage}
				totalCount={totalPages}
				pageSize={pageSize}
				onPageChange={(page) => setCurrentPage(page)}
			/>
		</div>
	);
};

export default RaftTeam;
