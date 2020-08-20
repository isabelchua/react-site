import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import { useAxiosGet } from '../hooks/HttpRequests';

const Portfolio = () => {
	const { id } = useParams();
	const url = `https://5f3d79d1ac60dc001626dc49.mockapi.io/api/v1/portfolio/${id}`;
	// const [product, setProduct] = useState({
	// 	loading: false,
	// 	data: null,
	// 	error: false
	// });

	let product = useAxiosGet(url);

	let content = null;

	// useEffect(() => {
	// 	setProduct({
	// 		loading: true,
	// 		data: null,
	// 		error: false
	// 	});
	// 	axios
	// 		.get(url)
	// 		.then(response => {
	// 			setProduct({
	// 				loading: false,
	// 				data: response.data,
	// 				error: false
	// 			});
	// 		})
	// 		.catch(() => {
	// 			setProduct({
	// 				loading: false,
	// 				data: null,
	// 				error: true
	// 			});
	// 		});
	// }, [url]);

	if (product.error) {
		content = <p>There was an error please refresh or try again later.</p>;
	}

	if (product.loading) {
		content = <Loader></Loader>;
	}

	if (product.data) {
		content = (
			<div>
				<h1>{product.data.name}</h1>
				<img src={product.data.image} alt={product.data.name} />
				<img src={product.data.avatar} alt={product.data.name} />
				{product.data.createdAt}
			</div>
		);
	}
	return <div>{content}</div>;
};

export default Portfolio;
