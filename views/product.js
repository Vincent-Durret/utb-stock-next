import Grid from '@/components/Grid/Grid';
import SubProducts from '@/components/SubProducts/SubProducts';
import SectionAddSubProducts from '@/components/SubProductsSection/SectionAddSubProducts';
import React from 'react';

const Product = (props) => {
  return (
    <section>
      <SectionAddSubProducts subProducts={props.subProducts} productId={props.productId} />
      <Grid>
        <SubProducts subProducts={props.subProducts} />
      </Grid>
    </section>
  );
};

export default Product;
