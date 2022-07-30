import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import './Home.scss';

const Home = () => {
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
		fetchData(2, currentPage);
	}, [currentPage, totalPages]);

	return(
		<div className='homepage'>
			<Header />
			
			<h3>ZANIMLJIVOSTI</h3>

				<ul>
					<li> Osnivanje Dajak kluba imalo je u cilju očuvanje dajak čamca kao autohtone banjalučke 	vještine, zaštitu vodotoka, obala i porječja rijeka, kao i postavljanje zvaničnih standarda vožnje dajak čamca sa ciljem registrovanja ove vještine kao sporta.
					</li>

					<li>
						<b><u>Dajak čamac kao simbol grada</u></b> - pretpostavka je da je nastao kada i Banjaluka, prvo zato što nije bilo mostova pa je čamac bio jedino rješenje za prelazak sa obale na obalu, a kasnije kada su sagrađeni prvi mostovi, bio je jedini način prelaska preko rijeke a da se ne plati mostarina. Korišten je u trgovačke svrhe, za prevoz robe od obale do obale.
					</li>

					<li>
						Dajak je naziv obrađenog komada drveta kojim se gura čamac. Upravo taj komad drveta, po
						kojem se naziva čamac, služi za odgurivanje, daje čamcu potrebno ubrzanje za rijeku, a
						koristi se zbog relativno male dubine gdje veslo ne bi bilo od pomoći.
					</li>
				</ul>
			</div>
	)
	
};

export default Home;
