import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const CategoryProducts = () => {
    const products = useLoaderData();
    return (
        <div className='text-center mt-7'>
            <h2 className='text-3xl font-semibold '>{products?.length} {products[0]?.category} MotorCycles Available for Sale </h2>
            <div className='my-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:mx-24 mx-10'>
                {
                    products?.map(product => <ProductCard key={product._id} product= {product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default CategoryProducts;