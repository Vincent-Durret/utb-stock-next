import React from 'react';
import Grid from '@/components/Grid/Grid';
import ProductsCard from '@/components/ProductsCard/ProductsCard';
import SectionAddProduct from '@/components/CategorySection/SectionAddProduct';

const Category = (props) => {
  return (
    <section>
      <SectionAddProduct />
      <Grid>
        <ProductsCard products={props.products} />
      </Grid>
    </section>
  );
};

export default Category;
