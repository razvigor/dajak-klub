import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ExcerptPost from '../components/ExcerptPost';
import './RaftTeam.scss';
import ArrLeft from '../img/strelica-l.png';
import ArrRight from '../img/strelica-d.png';
import Header from '../components/Header';
const RaftTeam = () => {
	const [loading, setLoading] = useState(true);
	const [posts, setPosts] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	const ref = useRef(true);
	useEffect(() => {
		return function () {
			ref.current = false;
		};
	}, []);

	const fetchData = (category, cpage) => {
		if (ref) {
			axios
				.get(
					`https://mbportfolio.info/api/wp-json/wp/v2/posts?categories=${category}&_embed&per_page=6&page=${cpage}`
				)
				.then((res) => {
					console.log(res);
					setPosts(res.data);
					setTotalPages(() => parseInt(res.headers['x-wp-totalpages']));
					setLoading(false);
				})
				.catch((err) => {
					console.log(err);
					setLoading(false);
				});
		}
	};
	const pageIncrement = () => {
		setCurrentPage(() => currentPage + 1);
		console.log(currentPage);
	};
	const pageDecrement = () => {
		setCurrentPage(() => currentPage - 1);
		console.log(currentPage);
	};
	useEffect(() => {
		fetchData(5, currentPage);
	}, [currentPage, totalPages]);

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
								]['full']['source_url']
							}
							date={item.content.rendered}
							title={item.title.rendered}
							urlToPost={`${item.id}`}
						/>
					);
			  })
			: null;
	return (
		<>
			<Header />
			<div className='raft-team'>
				<div className='container'>
					<h1>Raft Tim</h1>
				</div>
				<div className='container'>
					{!loading ? content : <p>Loading...</p>}
				</div>
				{totalPages > 1 ? (
					<div className='pagination'>
						<div className='pagination-container'>
							<button
								disabled={currentPage <= 1 ? true : false}
								onClick={pageDecrement}
							>
								<img src={ArrLeft} alt='Arow left icon' height='19' /> Prethodna
								stranica
							</button>
							<button
								disabled={currentPage >= totalPages ? true : false}
								onClick={pageIncrement}
							>
								Naredna stranica{' '}
								<img src={ArrRight} alt='Arow right icon' height='19' />
							</button>
						</div>
					</div>
				) : null}
			</div>
		</>
	);
};

export default RaftTeam;
