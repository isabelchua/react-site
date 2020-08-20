import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = props => {
	return (
		<div className='border mb-4 rounded overflow-hidden'>
			<Link to={`/portfolio/${props.product.id}`}>
				<div
					style={{ backgroundImage: `url('${props.product.image}')` }}
					className='w-full h-64 bg-blue bg-cover'
				></div>
			</Link>
			<div className='p-3'>
				<h3 className='font-bold text-xl mb3'>
					<Link to={`/portfolio/${props.product.id}`}>
						{props.product.name}
					</Link>
				</h3>
			</div>
			<Link
				to={`/portfolio/${props.product.id}`}
				className='bg-blue-500 text-white p-2 flex justify-center'
			>
				View
			</Link>
		</div>
	);
};

export default ProductCard;
