import React, { useState, useEffect } from 'react';

import Loader from '../components/Loader';
import ProductCard from '../components/ProductCard';
import { useAxiosGet } from '../hooks/HttpRequests';

const Home = () => {
	const url = `https://5f3d79d1ac60dc001626dc49.mockapi.io/api/v1/portfolio?page=1&limit=10`;

	let products = useAxiosGet(url);

	let content = null;

	if (products.error) {
		content = <p>There was an error please refresh or try again later.</p>;
	}

	if (products.loading) {
		content = <Loader></Loader>;
	}

	if (products.data) {
		content = products.data.map((product, key) => (
			<div key={product.id}>
				<ProductCard product={product} />
			</div>
		));
	}

	return (
		<div>
			<h1 className='font-bold text-2xl'>{content}</h1>
		</div>
	);
};

export default Home;
