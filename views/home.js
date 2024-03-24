import ProductsCard from '@/components/ProductsCard/ProductsCard';
import React from 'react';

const Home = (props) => {
  return (
    <main>
      <ProductsCard products={props.allProducts} />
    </main>
  );
};

export default Home;
